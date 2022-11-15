import React from 'react';
import { Route, Routes } from "react-router-dom"
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FrontPage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {

<<<<<<< HEAD
	return (
		<Routes>
			<Route path="/" element={<FrontPage />} />
			<Route path="/about" element={<About />} />
			<Route path="/shop" element={<Shop loggedIn={props.loggedIn}/>} />
			<Route path="/product" element={<ProductPage loggedIn={props.loggedIn} bookId="2"/>} />
		</Routes>
	);
  
{/*}
=======
// Routingin alustavaa koodia, ei toimi tälläisenaan, tästä voi jatkaa. Jos jatkat, laita switchi kommentiksi ja poista tästä kommentointi

	{/* <BrowserRouter>
      <Routes>
        <Route path="" element={<FrontPage />} />
		
		<Route path="/shop" element={<Shop loggedIn={props.loggedIn} />} />
        
      </Routes>
</BrowserRouter> */ }


>>>>>>> a005ea30c8d19a4dc868d6aba8649ad40d57d807
	switch (props.page[0]) {                //yksittäisten sivujen testaukseen ennen routingia
		case "Home":
			return (
				<FrontPage />
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

	}*/}
}
