import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from './variables'

//yksittäisen tuotteen komponentti, käytettään Catalogissa tuotteiden näyttämiseen
//voidaan koodata toimimaan myös ostoskorin tuotteiden näyttämiseen

export function Product(props) {
	return (
	<div>
		<div class="col mb-5">
			<div class="card h-100">
			<img class="card-img-top" src={require('../images/product.png')} alt="..." />
				<div class="card-body p-4">
					<div class="text-center">
						<h5 class="fw-bolder">{props.productName}</h5>
						{props.productPrice}€
					</div>
				</div>
				<div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
					<div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">{language.productDetails}</a></div>
				</div>
			</div>
		</div>
		</div>
	);
}
