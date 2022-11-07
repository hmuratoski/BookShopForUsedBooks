import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Category.css'

//tuotelistauksen haku ja filtterit

export const Category = () => {

	const categories = ["Matematiikka", "Fysiikka", "Kemia"];   //from database

	return (
		<div className="filterOuter">
			<div className="filterWrapper ">
				<div className="searchFieldWrapper">
					<input id="searchField" defaultValue="Haku"/>
				</div>
				<div id="tagFilter">
					{categories.map((item, index) => (
						<div key={index} className="checkboxFilter">
							<div className="checkboxWrapper">
								<input type="checkbox"></input>
							</div>
							<div className="checkboxTextWrapper">
								<h5>{item}</h5>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
