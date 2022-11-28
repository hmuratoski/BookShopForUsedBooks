import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ProductPage.css';
import { Condition } from '../condition';
import { language } from '../../locale/FI';
import { Database } from '../../database/variables.js';
import { useLocation, useNavigate } from 'react-router-dom';

//yksittäisen tuotteen tarkempi sivu tuotetta klikattaessa

export const ProductPage = (props) => {

	const navigate = useNavigate();
	const [shoppingCart, setShoppingCart] = useState([]);
	const location = useLocation();
	const bookId = location.search.replace(/\D/g, '');
	const [bookDetails, setBookDetails] = useState([]);

	const addToCart = (id) => {                                      //tuotteen id eventistä (e)
		if (!shoppingCart.includes(id)) {
			shoppingCart.push(id);
			console.log("%c Adding product " + id + " to cart         " + JSON.stringify(shoppingCart), 'color: #22AA22');

			localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
		} else {
			console.log("%c Product already in cart          " + JSON.stringify(shoppingCart), 'color: #DD2222');
		}
		navigate('/shop');
	}

	useEffect(() => {
		var cookie = localStorage.shoppingCart;
		
		if (cookie) {
			try {
				let obj = JSON.parse(cookie);
				setShoppingCart(obj);
			} catch {
				localStorage.removeItem("shoppingCart");
				localStorage.shoppingCart = [];
				console.log(shoppingCart);
			}
		} else {
			localStorage.shoppingCart = [];
		}
		
		
		
		
		axios.get(Database.requestUrl + "?action=getBookDetails&bookId=" + bookId).then((response) => {
			var details = [];
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					details.push(response.data[i]);
				}
				setBookDetails(details);
			}
		});
	}, []);

	if (bookDetails.length > 0) {
		let src;
		try {
			src = require(`../../images/product/${bookDetails[0].bookId}.png`);
		}
		catch {
			let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1)
			src = require(`../../images/product/product${randomNumber}.png`);          //jos tuotekuva puuttuu, laitetaan random placeholderi tilalle
		}
		return (
			<div className="container">
			<div className="text-center"><span className="btn btn-outline-dark mt-auto bookDetails productButton flex-child" onClick={e => navigate(-1)}>{language.back}</span></div>
				<div className="row">
					<div className="col-xs-4 item-photo">
						<img style={{width: "30%"}} src={src} /> 
					</div>
					<div className="col-xs-5">
						<h3>{bookDetails[0].bookName}</h3>
	
						<h6 className="title-price"><small>{bookDetails[0].author}, {bookDetails[0].year}</small></h6>
						<h3>{bookDetails[0].price} €</h3>
						<div style={{display: "flex"}}>
							<h6 style={{marginTop: "5px"}}>{language.condition}:</h6>
							<Condition condition={bookDetails[0].condition}/>
						</div>
						<h6 className="title-price"><small>{bookDetails[0].description}</small></h6>
					</div>
					<div className="text-center"><a className="btn btn-outline-dark mt-auto cartButton productButton flex-child" onClick={e => addToCart(bookId)}><img className="cartIcon" src={require('../../images/cart.png')}/></a></div>
				</div>
			</div>        
		);
	} else {
		return;
	}
}
