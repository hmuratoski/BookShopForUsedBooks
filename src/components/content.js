import React from 'react';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { Frontpage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {
	switch (props.page[0]) {                //yksittäisten sivujen testaukseen ennen routingia
		case "Home":
			return (
				<Frontpage />
			);
			
		case "ProductPage":
			return (
				<ProductPage 
					bookId="2"
				/>
			);

		case "About":
			return (
				<About />
			);

		case "Shop":
			return (
				<Shop loggedIn={props.loggedIn} />
			);

	}
}
