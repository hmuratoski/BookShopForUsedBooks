import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ProductPage.css';
import { language } from '../../locale/FI';
import { Database } from '../../database/variables.js';

//yksittäisen tuotteen tarkempi sivu tuotetta klikattaessa

export const ProductPage = (props) => {

	const [bookDetails, setBookDetails] = useState([]);

	useEffect(() => {
		axios.get(Database.requestUrl + "?action=getBookDetails&bookId=" + props.bookId).then((response) => {
			var details = [];
			if (response.data.length > 0) {
				for (var i = 0; i < response.data.length; i++) {
					details.push(response.data[i]);
				}
				setBookDetails(details);
			}
		});
	}, []);
	
	//${bookDetails.bookId}

	return (
		<div class="container">
			<div class="row">
				<div class="col-xs-4 item-photo">
					<img src={require(`../../images/product/1.png`)} /> 
				</div>
				<div class="col-xs-5">
					<h3>{bookDetails.bookName}</h3>

					<h6 class="title-price"><small>{bookDetails.author}</small></h6>
					<h3>{bookDetails.price}</h3>
					<h3>{language.condition}: {bookDetails.condition}</h3>
					<h6 class="title-price"><small>{bookDetails.description}</small></h6>
				</div>
				{props.loggedIn ? <div className="text-center"><a className="btn btn-outline-dark mt-auto cartButton productButton flex-child" href="#"><img className="cartIcon" src={require('../../images/cart.png')}/></a></div> : null }
				
			</div>
		</div>        
	);
}
