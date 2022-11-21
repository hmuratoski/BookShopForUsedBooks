import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Catalog } from '../catalog';
import { Category } from '../category';
import { Database } from '../../database/variables.js';		//vaihda php-server extensionin portti 3001:ksi -> avaa index.php, rightclick, serve

//vältä useamman terminaalin avaamista, ettei kehityspalvelin syö tietokannan porttia

export const Shop = (props) => {

	const [booksFromDatabase, setBooksFromDatabase] = useState([]);
	const [shoppingCart, setShoppingCart] = useState([]);

	const filterBooks = (categoriesToGet, searchTerm) => {
		var axiosRequest = "?action=getBooks";
		if (categoriesToGet.length > 0) {
			axiosRequest += "&categoriesToGet=" + categoriesToGet;
		}
		if (searchTerm.length > 0) {
			axiosRequest += "&searchTerm=" + searchTerm;
		}

		axios.get(Database.requestUrl + axiosRequest).then((response) => {         //filtterin tiedot -> php
			var books = [];
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					books.push(response.data[i]);
				}
			}
			setBooksFromDatabase(books);
		});
	}

	const addToCart = (e) => {
		var id = e.target.id.replace(/\D/g, '');
		shoppingCart.push(id);
		console.log(shoppingCart);
	}

	useEffect(() => {
		axios.get(Database.requestUrl + "?action=getBooks").then((response) => {
			var books = [];
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					books.push(response.data[i]);
				}
				setBooksFromDatabase(books);
			}
		});
	}, []);

	return (
		<div className="pageContent">
			<Category
				filterBooks={filterBooks}
			/>                                                              {/*filtterit*/}
			<Catalog
				booksToDisplay={booksFromDatabase}
				loggedIn={props.loggedIn}
				addToCart={addToCart}
			/>  {/*tuotteet*/}
		</div>
	);
}
