import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ProductPage.css';
import { Condition } from '../condition';
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

	if (bookDetails.length > 0) {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-4 item-photo">
						<img style={{width: "30%"}} src={require(`../../images/product/${bookDetails[0].bookId}.png`)} /> 
					</div>
					<div className="col-xs-5">
						<h3>{bookDetails[0].bookName}</h3>
	
						<h6 className="title-price"><small>{bookDetails[0].author}</small></h6>
						<h3>{bookDetails[0].price} €</h3>
						<div style={{display: "flex"}}>
							<h6 style={{marginTop: "5px"}}>{language.condition}:</h6>
							<Condition condition={bookDetails[0].condition}/>
						</div>
						<h6 className="title-price"><small>{bookDetails[0].description}</small></h6>
					</div>
					{props.loggedIn ? <div className="text-center"><a className="btn btn-outline-dark mt-auto cartButton productButton flex-child" href="#"><img className="cartIcon" src={require('../../images/cart.png')}/></a></div> : null }
					
				</div>
			</div>        
		);
	} else {
		return;
	}
}
