import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';

//listaa tuotteet haun/filtterin perusteella käyttäen "Product" komponenttia

export function Catalog() {
	return (
		<section className="py-5">
			<div className="container px-4 px-lg-5 mt-5">
				<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				<Product productPrice="50" productName="Kirja1" />
					<Product productPrice="50" productName="Kirja2" productImage="../images/product.png" />
					<Product productPrice="40" productName="Kirja3" productImage="../images/product.png" />
					<Product productPrice="35" productName="Kirja4" productImage="../images/product.png" />
					<Product productPrice="30" productName="Kirja5" productImage="../images/product.png" />
					<Product productPrice="25" productName="Kirja1" productImage="../images/product.png" />
					<Product productPrice="20" productName="Kirja2" productImage="../images/product.png" />
					<Product productPrice="10" productName="Kirja3" productImage="../images/product.png" />
					<Product productPrice="12" productName="Kirja4" productImage="../images/product.png" />
					<Product productPrice="43" productName="Kirja5" productImage="../images/product.png" />	
				</div>
			</div>
        </section >
	);
};