import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Category.css'
import { Database } from '../database/variables.js';

//tuotelistauksen haku ja filtterit
	//tarvitaan täältä tiedot takaisin content.js tiedostoon, jotta voidaan laittaa se argumentiksi
	//phplle SQL kyselyä varten. (ks. login.js:16 )

export const Category = () => {

	const [categories, setCategories] = useState([]);
	
	useEffect(() => {
		axios.get(Database.requestUrl + "?action=getCat").then((response) => {   
			if (response.data.length > 0 && categories.length == 0) {
				for (var i = 0; i < response.data.length; i++) {
					let categoryFromDatabase = {categoryName: response.data[i].categoryName, categoryId: response.data[i].categoryId}
					categories.push(categoryFromDatabase);
				}
			}
		});
	}, []);

	return (
		<div className="filterOuter mt-5">
			<div className="filterPadding" />
				<div className="filterWrapper ">
					<div className="searchFieldWrapper">
						<input id="searchField" defaultValue="Haku" />
					</div>
					<div id="tagFilter">
						{categories.map((item, index) => (          //luo elementit jokaiselle kategorialle
							<div key={index} className="checkboxFilter">
								<div className="checkboxWrapper">
									<input id={`category${item.categoryId}`} type="checkbox"></input>
								</div>
								<div className="checkboxTextWrapper">
									<h5>{item.categoryName}</h5>
								</div>
							</div>
						))}
					</div>
				</div>
			<div className="filterPadding" />
		</div>
	);
}
