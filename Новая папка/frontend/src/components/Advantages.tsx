import './Advantages.css'

const Advantages = () => {
	return (
		<div className='container'>
			<div className='flex-adv'>
				<div className='adv-1'>
					<img src='/img/Deliver.png' alt='' className='img-adv' />
					<h2 className='text-adv'>
						<span>Бесплатная</span> доставка по городу
					</h2>
				</div>
				<div className='adv-1'>
					<img src='/img/Gift.png' alt='' className='img-adv' />
					<h2 className='text-adv'>
						Открытка <span>в подарок</span> и фото вручения
					</h2>
				</div>
				<div className='adv-1'>
					<img src='/img/Clock.png' alt='' className='img-adv' />
					<h2 className='text-adv'>
						<span>Круглосуточная</span> доставка
					</h2>
				</div>
				<div className='adv-1'>
					<img src='/img/Sale.png' alt='' className='img-adv' />
					<h2 className='text-adv'>
						Накопительная система <span>скидок</span>
					</h2>
				</div>
			</div>
		</div>
	)
}

export default Advantages
