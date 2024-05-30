import InfoUp from '../components/InfoUp';
import Advantages from '../components/Advantages';
import CatalogCart from '../components/CatalogCart';

interface Document {
	id: number;
	image: string;
	title: string;
	price: number;
	inCart: number;
}

const Main = ({ doc, handleAddToCart }: { doc: Document[], handleAddToCart: (id: number) => void }) => {
	return (
		<>
			<InfoUp />
			<Advantages />
			<CatalogCart doc={doc} handleAddToCart={handleAddToCart} />
		</>
	);
};

export default Main;
