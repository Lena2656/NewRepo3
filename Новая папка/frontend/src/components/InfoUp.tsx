import './InfoUp.css'

const InfoUp = () => {
	return (
		<div className='InfoUp'>
			<h2 className='text-info'>
				{' '}
				<span className='text-info_green'>Доставка</span> цветов в городе
			</h2>
			<h1 className='moscow'>Москва</h1>
			<a href='#catalog' className='catalog'>
				Каталог
			</a>
		</div>
	)
}

export default InfoUp
