import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Category.css'
import { Database } from '../database/variables.js';

//tuotelistauksen haku ja filtterit
//tarvitaan täältä tiedot takaisin content.js tiedostoon, jotta voidaan laittaa se argumentiksi
//phplle SQL kyselyä varten. (ks. login.js:16 )

export const Category = (props) => {

	const [categories, setCategories] = useState([]);
	const [checked, setChecked] = useState({})

	const processFilter = (e) => {
		const value = {
			...checked,
			[e.target.name]: e.target.checked,
		}
		setChecked(value);
		
		var categoriesToGet = []
		for (const key in value) {
			if(value[key]) {
				categoriesToGet.push(key);
			}
		}
		var searchTerm = document.getElementById('searchField').value
		props.filterBooks(categoriesToGet, searchTerm);
	}

	useEffect(() => {
		if (categories.length < 1) {
		axios.get(Database.requestUrl + "?action=getCategories").then((response) => {
			var category = [];
			if (response.data.length > 0 && categories.length == 0) {
				for (var i = 0; i < response.data.length; i++) {
					let categoryFromDatabase = { categoryName: response.data[i].categoryName, categoryId: response.data[i].categoryId }
					category.push(categoryFromDatabase);
				}
				category.sort(dynamicSort("categoryName"));
				setCategories(category);
			}
		});
	}
	}, []);

	if (categories.length > 0) {
		return (
			<div className="filterOuter mt-5">
				<div className="filterPadding" />
				<div className="filterWrapper ">
					<div className="searchFieldWrapper">
						<input id="searchField" placeholder="Haku" onChange={e => processFilter(e)}/>
					</div>
					<div id="tagFilter">
						{categories.map((item, index) => {          //luo elementit jokaiselle kategorialle
							return (
								<div key={index} className="checkboxFilter">
									<div className="checkboxWrapper">
										<input
											id={`category${item.categoryId}`}
											name={item.categoryId} type="checkbox"
											onChange={e => { processFilter(e) }}
										/>
									</div>
									<div className="checkboxTextWrapper">
										<h5>{item.categoryName}</h5>
									</div>
								</div>
							)
						})}
					</div>
				</div>
				<div className="filterPadding" />
			</div>
		);
	} else {
		return;
	}
	
	function dynamicSort(property) {
		var sortOrder = 1;
		if(property[0] === "-") {
			sortOrder = -1;
			property = property.substr(1);
		}
		return function (a,b) {
			/* next line works with strings and numbers, 
			 * and you may want to customize it to your needs
			 */
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
		}
	}
}
