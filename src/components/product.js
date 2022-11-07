import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/variables.js'
import '../css/Product.css';


//yksittäisen tuotteen komponentti, käytettään Catalogissa tuotteiden näyttämiseen
//voidaan koodata toimimaan myös ostoskorin tuotteiden näyttämiseen

export function Product(props) {
	return (
	<div>
		<div className="col mb-5">
			<div className="card h-100">
			<img className="card-img-top" src={require('../images/product.png')} alt="..." />
				<div className="card-body p-4">
					<div className="text-center">
						<h5 className="fw-bolder bookTitle">{props.productName}</h5>
						{props.productPrice}€
					</div>
				</div>
				<div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
					<div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">{language.productDetails}</a></div>
				</div>
			</div>
		</div>
		</div>
	);
}
