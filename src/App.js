import './App.css';
import Navbar from "./components/Navbar";
import cardsData from "./data";
import Card from "./components/Card";


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
		<Card
			key={item.id}
			item={item}
		/>
	);
}
