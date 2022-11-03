import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Product } from './product';

//listaa tuotteet haun/filtterin perusteella käyttäen "Product" komponenttia

export function Catalog() {
	return (
		<section class="py-5">
			<div class="container px-4 px-lg-5 mt-5">
				<div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
				<Product productPrice="50" productName="Kirja1" />
					<Product productPrice="50" productName="Kirja2" productImage="product.png" />
					<Product productPrice="50" productName="Kirja3" productImage="product.png" />
					<Product productPrice="50" productName="Kirja4" productImage="product.png" />
					<Product productPrice="50" productName="Kirja5" productImage="product.png" />
					<Product productPrice="50" productName="Kirja1" productImage="product.png" />
					<Product productPrice="50" productName="Kirja2" productImage="product.png" />
					<Product productPrice="50" productName="Kirja3" productImage="product.png" />
					<Product productPrice="50" productName="Kirja4" productImage="product.png" />
					<Product productPrice="50" productName="Kirja5" productImage="product.png" />	
				</div>
			</div>
        </section >
	);
};