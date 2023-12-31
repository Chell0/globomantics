import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import HousesContext from "../context/housesContex";

const HouseFilter = () => {
	const navigate = useNavigate();
	const allHouses = useContext(HousesContext);

	const countries = allHouses
		? Array.from(new Set(allHouses.map((h) => h.country)))
		: [];
	countries.unshift(null);

	const onSearchChange = (e) => {
		const country = e.target.value;
		navigate.pushState(`/searchresults/${country}`);
	};

	return (
		<div className="row mt-3">
			<div className="offset-md-2 col-md-4">
				Look for your dream house in country:
			</div>
			<div className="col-md-4 mb-3">
				<select className="form-select" onChange={onSearchChange}>
					{countries.map((c) => (
						<option key={c} value={c}>
							{c}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default HouseFilter;
