import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../../locale/FI.js'
import { Database } from '../../database/variables.js';
import { ShoppingCartItem } from '../shoppingcartitem.js';
import '../../css/ShoppingCart.css';
import axios from 'axios';
//ostoskori

export const ShoppingCart = (props) => {

	const [shoppingCart, setShoppingCart] = useState([]);
	const [booksFromDatabase, setBooksFromDatabase] = useState([]);

	useEffect(() => {

		var cookie = localStorage.shoppingCart;

		if (cookie) {
			try {
				let obj = JSON.parse(cookie);
				setShoppingCart(obj);
			} catch {
				localStorage.removeItem("shoppingCart");
				localStorage.shoppingCart = [];
			}
		} else {
			setShoppingCart([]);
			localStorage.removeItem("shoppingCart");
			localStorage.shoppingCart = [];
		}

		if (cookie) {
			if (JSON.parse(cookie).length > 0) {
				var axiosRequest = "?action=getBooks";
				axiosRequest += "&bookIds=" + JSON.parse(cookie);
				axios.get(Database.requestUrl + axiosRequest).then((response) => {         //filtterin tiedot -> php
					var books = [];
					if (response.data.length > 0) {
						for (var i = 0; i < response.data.length; i++) {
							books.push(response.data[i]);
						}
					}
					console.log(books)
					setBooksFromDatabase(books);
				});
			}
		}
	}, [])

	const removeItem = (id) => {
		const index = shoppingCart.indexOf(id);
		const newCart = shoppingCart;
		newCart.splice(index, 1);
		setShoppingCart(newCart);
		localStorage.shoppingCart = JSON.stringify(newCart);

		for (var i = booksFromDatabase.length - 1; i >= 0; --i) {
			if (booksFromDatabase[i].bookId == id) {
				booksFromDatabase.splice(i, 1);
			}
		}
		props.setItemsInCart(booksFromDatabase.length);
		console.log("setting length: " + booksFromDatabase.length)
	}

	console.log(booksFromDatabase);
	if (booksFromDatabase.length == 0) {
		return (
			<div>
				{language.shoppingCartEmpty}
			</div>
		);
	} else {
		var totalPrice = 0;
		return (
			<div className="container mt-2">
				<table>
					<thead>
						<tr>
							<th style={{ width: "30px" }}>#</th>
							<th style={{ width: "250px" }}>{language.product}</th>
							<th style={{ width: "50px" }}>{language.condition}</th>
							<th>{language.price}</th>
							<th>{language.remove}</th>
						</tr>
					</thead>

					<tbody>
						{booksFromDatabase.map((item) => {
							totalPrice = totalPrice - (-item.price);
							return (            //tähän shoppingcartitem.js ja alla oleva tavara sinne propsina
								<ShoppingCartItem
									key={item.bookId}
									bookId={item.bookId}
									price={item.price}
									name={item.bookName}
									author={item.author}
									year={item.year}
									condition={item.condition}
									removeItem={removeItem}
								/>

							)
						})}
					</tbody>
				</table>
				<p className='pricetag'>{language.totalPrice}: {totalPrice}</p>
				<button className='removeB'  onClick={event => {
					setShoppingCart([]);
					setBooksFromDatabase([]);
					localStorage.removeItem("shoppingCart");
					localStorage.shoppingCart = [];
					props.setItemsInCart(0);
				}}>{language.emptyCart}</button>
			</div>
		);
	}
}

