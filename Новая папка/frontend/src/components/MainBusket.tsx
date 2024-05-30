import BusketCart from './BusketCart'
import './MainBusket.css'

interface Document {
	id: number;
	image: string;
	title: string;
	price: number;
	inCart: number;
  }

const MainBusket = ({ doc }: { doc: Document[] }) => {

	const price = () => {
		let itog = 0
		for (let i=0; i<doc.length; i++){
			if (doc[i].inCart === 1){
				itog+=doc[i].price
			}
		}
		return itog
	}
	
	return (
		<>
			<div className='container'>
				<div className='flex-card_busket'>
					{doc.map((el) => {
						if (el.inCart === 1){
							return (
								<BusketCart data={el} />
							)
						}
					})}
				</div>

				<h2 className='text-score'>Итого: {price()}</h2>
			</div>
		</>
	)
}

export default MainBusket
