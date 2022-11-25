import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../../locale/FI.js'
import { Database } from '../../database/variables.js';
import axios from 'axios';
//ostoskori

export const ShoppingCart = (props) => {

	const [shoppingCart, setShoppingCart] = useState([]);
	const [booksFromDatabase, setBooksFromDatabase] = useState([]);
	
	useEffect(() => {
	
		var shoppingCart = localStorage.shoppingCart;
		
		if (typeof shoppingCart != "undefined") {
			try {
				console.log("Ostoskori: " + shoppingCart);
				let obj = JSON.parse(shoppingCart);
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
		
		if (shoppingCart.length > 0) {
			var axiosRequest = "?action=getBooks";
				axiosRequest += "&bookIds=" + JSON.parse(shoppingCart);

	
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
	}, [])
	
	if (shoppingCart.length == 0) {
		return (
			<div>
				{language.shoppingCartEmpty}
			</div>
		);
	} else {
		var totalPrice = 0;
		return (
			<div>
				{booksFromDatabase.map((item) => {
				console.log(item.price)
					totalPrice = totalPrice-(-item.price);
					return (            //tähän shoppingcartitem.js ja alla oleva tavara sinne propsina
						<p key={item.bookId}>{item.bookId} {item.price} {item.bookName} {item.author} {item.year} {item.condition}</p>
					)
				})}
				<p>{language.totalPrice}: {totalPrice}</p>
				<button onClick={event => {
					setShoppingCart([]);
					localStorage.shoppingCart = [];
					props.setItemsInCart(0);
				}}>{language.emptyCart}</button>
			</div>
		);
	}
}
