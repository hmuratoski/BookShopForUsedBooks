import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/variables.js'
import '../css/Product.css';


//yksittäisen tuotteen komponentti, käytettään Catalogissa tuotteiden näyttämiseen
//voidaan koodata toimimaan myös ostoskorin tuotteiden näyttämiseen

export const Product = (props) => {
	return (
	<div className="product">
		<div className="col">
			<div className="card">
			<img className="card-img-top" src={props.productImage} alt="..." />
				<div className="card-body p-4">
					<div className="text-center">
						<h5 className="fw-bolder bookTitle">{props.productName}</h5>
						<h5 classname="fw-bolder bookPrice">{props.productPrice}€</h5>
					</div>
				</div>
				<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
					<div className="text-center"><a className="btn btn-outline-dark mt-auto bookDetails" href="#">{language.productDetails}</a></div>
				</div>
			</div>
		</div>
		</div>
	);
}
