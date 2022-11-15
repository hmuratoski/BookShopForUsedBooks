import React from 'react';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { FrontPage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {

	{/* <BrowserRouter>
      <Routes>
        <Route path="" element={<FrontPage />} />
		
		<Route path="/shop" element={<Shop loggedIn={props.loggedIn} />} />
        
      </Routes>
</BrowserRouter> */ }


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

	}
}
