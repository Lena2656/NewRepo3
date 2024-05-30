import React from 'react';
import './CatalogCart.css';
import Card from './Card';

interface Document {
	id: number;
	image: string;
	title: string;
	price: number;
	inCart: number;
}

const CatalogCart = ({ doc, handleAddToCart }: { doc: Document[], handleAddToCart: (id: number) => void }) => {
	return (
		<div className='container' id='catalog'>
			<div className='flex-card'>
				{doc.map(el => (
					<Card key={el.id} data={el} handleAddToCart={handleAddToCart} />
				))}
			</div>
		</div>
	);
};

export default CatalogCart;
