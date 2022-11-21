import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';
import '../css/Catalog.css'

export const Catalog = (props) => {     //kirjat tulee nyt propsina <-- shop.js
	if (props.booksToDisplay.length > 0 &&
		typeof props.booksToDisplay[0].bookId != 'undefined'    //jos ei yhtään tuotetta, ei luoda katalogia ollenkaan.
	) {
		return (
			<section>
				<div className="container px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center catalogContainer">
						{props.booksToDisplay.map((item) => {
							let src;
						    try {
						        src = require(`../images/product/${item.bookId}.png`);
						    }
						    catch {
						        let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1)
						        src = require(`../images/product/product${randomNumber}.png`);          //jos tuotekuva puuttuu, laitetaan random placeholderi tilalle
						    }
							return (
								<Product
									loggedIn={props.loggedIn}
									key={item.bookId}
									productId={item.bookId}
									productPrice={item.price}
									productName={item.bookName}
									productImage={src}
									productAuthor={item.author}
									productYear={item.year}
									productCondition={item.condition}
									addToCart={props.addToCart}
								/>
							)
						})}
					</div>
				</div>
			</section>
		);
	}
};