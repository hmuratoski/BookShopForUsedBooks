import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/ProductPage.css';
import { language } from '../../locale/FI';

//yksittäisen tuotteen tarkempi sivu tuotetta klikattaessa

export const ProductPage = (props) => {
	return (
		<div class="container">
			<div class="row">
				<div class="col-xs-4 item-photo">
					<img src={props.productImage} />
				</div>
				<div class="col-xs-5">
					<h3>{props.productName}</h3>

					<h6 class="title-price"><small>{props.productAuthor}</small></h6>
					<h3>{props.productPrice}</h3>
					<h3>{language.condition}: {props.productCondition}</h3>
				</div>
				{props.loggedIn ? <div className="text-center"><a className="btn btn-outline-dark mt-auto cartButton productButton flex-child" href="#"><img className="cartIcon" src={require('../../images/cart.png')}/></a></div> : null }
				
			</div>
		</div>        
	);
}
