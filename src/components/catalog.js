import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';
import '../css/Catalog.css'

const books = [             //nyt tarvitaan pelkkä kuvatiedoston nimi databasesta, lisätty "product" kansio tuotekuville
	{ 'bookId': '1','image': 'product.png', 'price': '50', 'bookName': 'Kirja1', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '2', 'image': 'product2.png', 'price': '40', 'bookName': 'Kirja2', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '3', 'image': 'product3.png', 'price': '30', 'bookName': 'Kirja3', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '4', 'image': 'product4.png', 'price': '20', 'bookName': 'Kirja4', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '5', 'image': 'product5.png', 'price': '10', 'bookName': 'Kirja5', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '6', 'image': 'product4.png', 'price': '25', 'bookName': 'Kirja6', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '7', 'image': 'product.png', 'price': '65', 'bookName': 'Kirja7', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '8', 'image': 'product2.png', 'price': '15', 'bookName': 'Kirja8', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '9', 'image': 'product.png', 'price': '23', 'bookName': 'Kirja9', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '10', 'image': 'product3.png', 'price': '16', 'bookName': 'Kirja10', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '11', 'image': 'product5.png', 'price': '17', 'bookName': 'Kirja11', 'author': 'Kirjoittaja', 'year': '2015'},
	{ 'bookId': '12', 'image': 'product2.png', 'price': '14', 'bookName': 'Kirja12', 'author': 'Kirjoittaja', 'year': '2015' }
]

export const Catalog = () => {
	return (
		<section>
			<div className="container px-4 px-lg-5">
				<div className="row gx-4 gx-lg-5 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-5 justify-content-center catalogContainer">
					{books.map((item) => (
						<Product    key={item.bookId} 
									productPrice={item.price}
									productName={item.bookName} 
									productImage={require(`../images/product/${item.image}`)}
									productAuthor={item.author}
									productYear={item.year}
						/>
					))}
				</div>
			</div>
		</section >
	);
};