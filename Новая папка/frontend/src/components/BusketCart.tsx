import './BusketCart.css'

const BusketCart = ({ data }: any) => {
	return (
		<>
			<div className='flex-block'>
				<div className='block-1'>
					<img src={data.image} alt='' className='img-card' />
					<h3 className='title-card'>{data.title}</h3>
					<div className='price'>
						<div className='price-title'>Стоимость:</div>
						<div className='price-number'>{data.price} руб.</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default BusketCart
