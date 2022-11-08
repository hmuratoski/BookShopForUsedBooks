import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';
import '../css/Catalog.css'

export const Catalog = (props) => {     //kirjat tulee nyt propsina <-- content.js
	if (props.booksToDisplay.length > 0 &&
		typeof props.booksToDisplay[0].bookId != 'undefined'    //jos ei yhtään tuotetta, ei luoda katalogia ollenkaan.
	) {
		return (
			<section>
				<div className="container px-4 px-lg-5">
					<div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center catalogContainer">
						{props.booksToDisplay.map((item) => (
							<Product
								loggedIn={props.loggedIn}
								key={item.bookId}
								productPrice={item.price}
								productName={item.bookName}
								productImage={require(`../images/product/${item.image}`)}
								productAuthor={item.author}
								productYear={item.year}
							/>
						))}
					</div>
				</div>
			</section>
		);
	}
};