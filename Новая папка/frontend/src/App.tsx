import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Main from './Page/Main'
import Footer from './components/Footer'
import Enter from './Page/Enter'
import Reg from './Page/Reg'
import Busket from './Page/Busket'
import { useState } from 'react'

interface Document {
	id: number;
	image: string;
	title: string;
	price: number;
	inCart: number;
  }

function App() {

	const [doc, setDoc] = useState<Document[]>([
		{id: 1, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 1400, inCart: 0},
		{id: 2, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 2400, inCart: 0},
		{id: 3, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 3400, inCart: 0},
		{id: 4, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 4400, inCart: 0},
		{id: 5, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 5500, inCart: 0},
		{id: 6, image: 'img/Rose.png', title: 'Букет из разноцветных роз', price: 6500, inCart: 0},
	]);

	const handleAddToCart = (id: number) => {
		const updatedDoc = doc.map(item => 
			item.id === id ? { ...item, inCart: 1 } : item
		);
		setDoc(updatedDoc);
	};

	return (
		<>
			<Header doc={doc}/>
			<Routes>
				<Route path='/' element={<Main doc={doc} handleAddToCart={handleAddToCart}/>} />
				<Route path='/enter' element={<Enter />} />
				<Route path='/reg' element={<Reg />} />
				<Route path='/cart' element={<Busket doc={doc}/>} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
