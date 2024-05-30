import MainBusket from '../components/MainBusket'

interface Document {
	id: number
	image: string
	title: string
	price: number
	inCart: number
}

const Busket = ({ doc }: { doc: Document[] }) => {
	return (
		<div style={{ minHeight: '100vh' }} id=''>
			<MainBusket doc={doc} />
		</div>
	)
}

export default Busket
