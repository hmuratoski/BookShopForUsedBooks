import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Catalog } from './catalog';
import { Category } from './category';
import '../css/Content.css'

const requestUrl = 'http://localhost:3001/src/database';        //vaihda php-server extensionin portti 3001:ksi

export const Content = () => {

	const [booksFromDatabase, setBooksFromDatabase] = useState([]);

	useEffect(() => {
		axios.get(requestUrl).then((response) => {
			var books = [];
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					if (response.data[i].image == null) {
						response.data[i].image = "product" + Math.floor(Math.random() * (5 - 2 + 1) + 2) + ".png"
															//random kuva testiksi
					}
					books.push(response.data[i]);
				}
				setBooksFromDatabase(books);
			}
		});
	}, []);

	return (
		<div className="pageContent">
			<Category />     {/*filtterit*/}
			<Catalog booksToDisplay={booksFromDatabase} /> {/*tuotteet*/}
		</div>
	);
}
