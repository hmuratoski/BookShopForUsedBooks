import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';
import '../css/Catalog.css'

//listaa tuotteet haun/filtterin perusteella käyttäen "Product" komponenttia

const books = [             //from database
	{ 'id': '1', 'image': require('../images/product.png'), 'price': '50', 'name': 'Kirja1' },
	{ 'id': '2', 'image': require('../images/product2.png'), 'price': '40', 'name': 'Kirja2' },
	{ 'id': '3', 'image': require('../images/product3.png'), 'price': '30', 'name': 'Kirja3' },
	{ 'id': '4', 'image': require('../images/product4.png'), 'price': '20', 'name': 'Kirja4' },
	{ 'id': '5', 'image': require('../images/product5.png'), 'price': '10', 'name': 'Kirja5' },
	{ 'id': '6', 'image': require('../images/product4.png'), 'price': '25', 'name': 'Kirja6' },
	{ 'id': '7', 'image': require('../images/product.png'), 'price': '65', 'name': 'Kirja7' },
	{ 'id': '8', 'image': require('../images/product2.png'), 'price': '15', 'name': 'Kirja8' },
	{ 'id': '9', 'image': require('../images/product.png'), 'price': '23', 'name': 'Kirja9' },
	{ 'id': '10', 'image': require('../images/product3.png'), 'price': '16', 'name': 'Kirja10' },
	{ 'id': '11', 'image': require('../images/product5.png'), 'price': '17', 'name': 'Kirja11' },
	{ 'id': '12', 'image': require('../images/product2.png'), 'price': '14', 'name': 'Kirja12' }
]

export const Catalog = () => {
	return (
		<section>
			<div className="container px-4 px-lg-5 mt-5">
				<div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center catalogContainer">
					{books.map((item) => (
						<Product key={item.id} productPrice={item.price} productName={item.name} productImage={item.image} />
					))}
				</div>
			</div>
		</section >
	);
};