import React from 'react';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../../locale/FI.js'

//ostoskori

export const ShoppingCart = () => {

	const [shoppingCart, setShoppingCart] = useState([]);
	
	useEffect(() => {
	
		var shoppingCart = localStorage.shoppingCart;
		
		if (typeof shoppingCart != "undefined") {
			try {
				console.log("Ostoskori: " + shoppingCart);
				let obj = JSON.parse(shoppingCart);
				setShoppingCart(obj);
			} catch {
				localStorage.removeItem("shoppingCart");
			}
		} else {
			setShoppingCart([]);
		}
		
		if (shoppingCart.length > 0) {
		//tässä haetaan tarvittavat tiedot tuotteista tietokannasta, laitetaan kaikki näytettävät tiedot menemään propsina -> shoppingcartitem.js
		}
	}, [])
	
	if (shoppingCart.length == 0) {
		return (
			<div>
				{language.shoppingCartEmpty}
			</div>
		);
	} else {
		return (
			<div>
				{shoppingCart.map((item) => {
					return (
						<h2>tuote {item}</h2>
					)
				})}
			</div>
		);
	}
}
