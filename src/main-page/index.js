import { BrowserRouter, Route, Routes } from "react-router-dom";
import HousesContext from "../context/housesContex";
import useFeaturedHouse from "../hooks/useFeaturedHouse";
import useHouses from "../hooks/useHouses";
import Header from "./header";
import HouseFilter from "./house-filter";
import "./main-page.css";

function App() {
	const allHouses = useHouses();
	const featuredHouse = useFeaturedHouse(allHouses);

	return (
		<BrowserRouter>
			<HousesContext.Provider value={allHouses}>
				<div className="container">
					<Header subtitle="Providing houses all over the world" />
					<HouseFilter allHouses={allHouses} />

					<Routes>
						<Route
							path="/searchresults/:country"
							SearchResults
							allHouses={allHouses}
						/>
						<Route
							path="/house/:id"
							HouseFromQuery
							allHouses={allHouses}
						/>
						<Route path="/" FeaturedHouse house={featuredHouse} />
					</Routes>
				</div>
			</HousesContext.Provider>
		</BrowserRouter>
	);
}

export default App;
