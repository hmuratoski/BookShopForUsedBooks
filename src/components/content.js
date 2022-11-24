import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FrontPage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
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
				bookId="2"
			/>} />
		</Routes>
	);
}
