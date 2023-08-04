import { useEffect, useMemo, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header";
import "./main-page.css";

function App() {
	const [allHouses, setAllHouses] = useState([]);

	useEffect(() => {
		const fetchHouses = async () => {
			const rsp = await fetch("/houses.json");
			const houses = await rsp.json();
			setAllHouses(houses);
		};
		fetchHouses();
	}, []);

	const featuredHouse = useMemo(() => {
		if (allHouses.length) {
			const randomIndex = Math.floor(Math.random() * allHouses.length);
			return allHouses[randomIndex];
		}
	}, [allHouses]);

	return (
		<Router>
			<div className="container">
				<Header subtitle="Providing houses all over the world" />
				<Routes>
					<Route path="/"></Route>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
