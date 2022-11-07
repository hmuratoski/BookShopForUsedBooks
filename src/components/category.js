import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Category.css'

//tuotelistauksen haku ja filtterit

export const Category = () => {
	return (
	<div className="filterOuter">
		<div className="filterWrapper ">
			<div className="searchFieldWrapper">
				<input id="searchField" value="Haku"/>
			</div>
			<div id="tagFilter">
				{/*esimerkki*/}
				<div className="checkboxFilter">
					<div className="checkboxWrapper">
						<input type="checkbox"></input>
					</div>
					<div className="checkboxTextWrapper">
						<p>Matematiikka</p>
					</div>
				</div>
				<div>
					<div className="checkboxWrapper">
						<input type="checkbox"></input>
					</div>
					<div className="checkboxTextWrapper">
						<p>Fysiikka</p>
					</div>
				</div>
				<div>
					<div className="checkboxWrapper">
						<input type="checkbox"></input>
					</div>
					<div className="checkboxTextWrapper">
						<p>Kemia</p>
					</div>
				</div>
				{/*esimerkki*/}
			</div>
		</div>
		</div>
	);
}
