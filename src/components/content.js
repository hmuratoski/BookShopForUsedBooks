import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Catalog } from './catalog';
import { Category } from './category';
import { Database } from '../database/variables.js';  //vaihda php-server extensionin portti 3001:ksi -> avaa index.php, rightclick, serve
import '../css/Content.css'

 

export const Content = () => {

	const [booksFromDatabase, setBooksFromDatabase] = useState([]);

	useEffect(() => {
		axios.get(Database.requestUrl).then((response) => {         //tästä pitää muuttaa post -request kunhan filtteri toimii, jotta saadaan
			var books = [];                                         //filtterin tiedot välitettyä phplle
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					if (response.data[i].image == null) {
						response.data[i].image = "product" + Math.floor(Math.random() * (5 - 1 + 1) + 1) + ".png" //random kuva testiksi jos kuvaa ei ole
					}
					books.push(response.data[i]);
				}
				setBooksFromDatabase(books);
			}
		});
	}, []);

	return (
		<div className="pageContent">
			<Category />                                    {/*filtterit*/}
			<Catalog booksToDisplay={booksFromDatabase} />  {/*tuotteet*/}
		</div>
	);
}
