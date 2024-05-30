import express from 'express'
import mysql from 'mysql2'
import cors from 'cors'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import env from 'dotenv'
env.config()

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'alena',
})

db.connect(err => {
	if (err) {
		throw err
	}
	console.log('Подключение к базе данных MySQL успешно установлено')
})

const PORT = process.env.PORT || 4444

app.listen(PORT, err => {
	if (err) {
		console.log(err)
		return
	}
	console.log('Server is running')
})

app.post('/register', function (req, res) {
	const { phoneNumber, password } = req.body

	bcrypt.genSalt(10, function (err, salt) {
		if (err) {
			console.error('Error generating salt:', err)
			return res.status(500).json({ error: 'Internal server error' })
		}

		bcrypt.hash(password, salt, function (err, hashedPassword) {
			if (err) {
				console.error('Error hashing password:', err)
				return res.status(500).json({ error: 'Internal server error' })
			}

			db.query(
				`INSERT INTO \`user\` (login, password) VALUES (?, ?)`,
				[phoneNumber, hashedPassword],
				function (err, result) {
					if (err) {
						console.error('Error registering user:', err)
						return res.status(500).json({ error: 'Internal server error' })
					}

					db.query('SELECT LAST_INSERT_ID() as id', function (err, rows) {
						if (err) {
							console.error('Error getting last insert ID:', err)
							return res.status(500).json({ error: 'Internal server error' })
						}
						const lastInsertId = rows[0].id

						const token = jwt.sign(
							{ userId: lastInsertId },
							process.env.jwt_key,
							{
								expiresIn: '30d',
							}
						)

						res.json({ token: token })
					})
				}
			)
		})
	})
})

app.post('/auth', function (req, res) {
	const { phoneNumber, password } = req.body

	db.query(
		`SELECT * FROM \`user\` WHERE login = ?`,
		[phoneNumber],
		function (err, results) {
			if (err) {
				console.error('Error querying user:', err)
				return res.status(500).json({ error: 'Internal server error' })
			}

			if (results.length === 0) {
				return res.status(401).json({ error: 'Неверный логин или пароль' })
			}

			const hashedPasswordFromDB = results[0].password
			bcrypt.compare(password, hashedPasswordFromDB, function (err, isMatch) {
				if (err) {
					console.error('Error comparing passwords:', err)
					return res.status(500).json({ error: 'Internal server error' })
				}

				if (!isMatch) {
					return res.status(401).json({ error: 'Неверный логин или пароль' })
				}

				const userId = results[0].id
				const token = jwt.sign({ userId: userId }, process.env.jwt_key, {
					expiresIn: '30d',
				})

				res.json({ token: token })
			})
		}
	)
})
