import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI.js'
import '../css/Product.css';
import { Condition } from './condition';
import { useState } from 'react';


//yksittäisen tuotteen komponentti, käytettään Catalogissa tuotteiden näyttämiseen
//voidaan koodata toimimaan myös ostoskorin tuotteiden näyttämiseen 






export const Product = (props) => {
	
	return (
		<div className="product">
			<div className="col">
				<div className="card">
					<img className="card-img-top productImage" src={props.productImage} alt="..." />
					<div className="card-body p-4">
						<div className="text-center productDetails">
							<h5 className="fw-bolder bookTitle">{props.productName}</h5>
							<p className="bookAuthor">{props.productAuthor}, {props.productYear}</p>
						</div>
						<div className="text-center productPrice">
							<h5 className="fw-bolder bookPrice">{props.productPrice}€</h5>
							<h5 className="bookCondition">{language.condition}: <Condition condition={props.productCondition} /></h5>
						</div>
					</div>
					<div className="card-footer p-3 pt-0 border-top-0 bg-transparent productButtonWrapper flex-container">
						<div className="text-center"><a className="btn btn-outline-dark mt-auto bookDetails productButton flex-child" href="#">{language.productDetails}</a></div>
						<div className="text-center"><a className="btn btn-outline-dark mt-auto cartButton productButton flex-child" id={`cart${props.productId}`} onClick={e => props.addToCart(e)}><img className="cartIcon" src={require('../images/cart.png')} /></a></div>
					</div>
				</div>
			</div>
		</div>
	);


}


