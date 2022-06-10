import './App.css';
import Navbar from "./components/Navbar";
import cardsData from "./data";
import Card from "./components/Card";
import SectionDivider from "./components/SectionDivider";


function App() {
	const dataElements = apiDataToCardComponentFrom(/*data*/ cardsData)
	
	return (
		<div>
			<Navbar/>
			<section className="cards-list">
				{dataElements}
			</section>
		</div>
	);
}

export default App;

function apiDataToCardComponentFrom(/*Object[]*/ data) {
	return data.map(item =>
		<div>
			<Card
				key={item.id}
				item={item}
			/>
			<SectionDivider/>
		</div>
	);
}
