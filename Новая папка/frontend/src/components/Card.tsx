import React from 'react';
import './Card.css';

interface Data {
	id: number;
	image: string;
	title: string;
	price: number;
	inCart: number;
}

const Card = ({ data, handleAddToCart }: { data: Data, handleAddToCart: (id: number) => void }) => {
	return (
		<div className='flex-block'>
			<div className='block-1'>
				<img src={data.image} alt='' className='img-card' />
				<h3 className='title-card'>{data.title}</h3>
				<div className='price'>
					<div className='price-title'>Стоимость:</div>
					<div className='price-number'>{data.price} руб.</div>
				</div>
			</div>
			{data.inCart === 1 ? (
				<button className='to-busket'>Добавлен</button>
			) : (
				<button className='to-busket' onClick={() => handleAddToCart(data.id)}>В корзину</button>
			)}
		</div>
	);
};

export default Card;
