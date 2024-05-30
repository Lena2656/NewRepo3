import { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

interface Document {
	id: number
	image: string
	title: string
	price: number
	inCart: number
}

const Header = ({ doc }: { doc: Document[] }) => {
	const [price, setPrice] = useState(0)
	const token = localStorage.getItem('token')

	useEffect(() => {
		const handlePrice = () => {
			const total = doc.reduce((sum, item) => {
				return item.inCart === 1 ? sum + item.price : sum
			}, 0)
			setPrice(total)
		}
		handlePrice()
	}, [doc])

	const exitAccount = () => {
		localStorage.removeItem('token')
		window.location.href = '/'
	}

	return (
		<header className='header'>
			<div className='container'>
				<div className='header-flex'>
					<Link
						to='https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9F%D1%80%D1%8F%D0%BD%D0%B8%D1%88%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%D0%B0,+2%D0%90,+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+125008/@55.8336035,37.5414124,17z/data=!3m1!4b1!4m6!3m5!1s0x46b537ce02e48cd9:0xa65aaa0de44332ba!8m2!3d55.8336005!4d37.5439873!16s%2Fg%2F11q8wjllhv?entry=ttu'
						target='_blank'
						rel='noopener noreferrer'
						className='address'
					>
						<img src='/img/Point.svg' width={15} height={20} alt='Point' />
						<h3 className='text-address'>г.Москва, ул. Прянишникова 2А</h3>
					</Link>
					<Link to='/' className='logo'>
						<img src='/img/logo.svg' width={32} height={32} alt='' />
					</Link>

					<div className='block-2'>
						{!token ? (
							<div className='enter-reg'>
								<Link to='/enter' className='enter'>
									Вход
								</Link>
								<Link to='/reg' className='registration'>
									Регистрация
								</Link>
							</div>
						) : (
							<div className='busket'>
								<Link to='/cart' className='busket-link'>
									<img
										src='/img/Busket.svg'
										width={20}
										height={20}
										alt='Busket'
									/>
								</Link>
								<div className='exit' onClick={() => exitAccount()}>
									Выйти
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
