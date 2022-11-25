import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FrontPage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import { ShoppingCart } from './pages/shoppingcart';
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {

	return (
		<Routes>
			<Route path="/" element={<FrontPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/shop" element={
				<Shop 
				loggedIn={props.loggedIn}
				setItemsInCart={props.setItemsInCart}
			/>} />
			<Route path="/product" element={
				<ProductPage 
				loggedIn={props.loggedIn}
			/>} />
			<Route path="/cart" element={
			<ShoppingCart setItemsInCart={props.setItemsInCart} />
			} />
		</Routes>
	);
}
