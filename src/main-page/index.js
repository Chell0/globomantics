import Header from "./header";
import "./main-page.css";

function App() {
	// load data
	const userName = "Chelloh";
	return (
		<div className="container">
			<Header subtitle={userName} />
		</div>
	);
}

export default App;
