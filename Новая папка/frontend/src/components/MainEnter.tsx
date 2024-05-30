import './MainEnter.css'
import { useState } from 'react'
import axios from "../axios"

const MainEnter = () => {

	const [phoneNumber, setPhoneNumber] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const handleLogin = () => {
		axios.post("/auth", {phoneNumber: phoneNumber, password: password})
		.then((res:any) => {
			if (res.data.token){
				localStorage.setItem("token", res.data.token)
				window.location.href = '/'
			}
		})
		.catch((err:any)=>{
			setError(err.response.data.error);
			console.log(err)
		})
	}

	return (
		<div className='container'>
			<div className='block-flex'>
				<img src='/img/bgc-enter.png' alt='' />
				<div className='enter-2'>
					<h3 className='text-phone' >Телефон:</h3>
					<input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='+_(___) ___-__-__' />
					<h3 className='text-password'>Пароль:</h3>
					<input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='qwerty' />
					{error}
					<button className='button-enter' onClick={() => handleLogin()}>Войти</button>
				</div>
			</div>
		</div>
	)
}

export default MainEnter
