import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { language } from './locale/FI.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {

	console.log(useLocation().pathname);                //pitää tarkistaa opettajalta, onko käyttökelpoinen product sivulle

	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

	//näitä voi muuttaa
	const [itemsInCart, setItemsInCart] = useState(0);  //asettaa ostoskorin tuotteet, otetaan myöhemmin kekseistä

	useEffect(() => {
		document.title = language.shopName;             //asettaa välilehden titlen
		var shoppingCart = localStorage.shoppingCart;
		let obj = JSON.parse(shoppingCart);
		setItemsInCart(obj.length)
	})

	return (
		<div>
			<Navbar
				itemsInCart={itemsInCart}
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				userName={userName}
				setUserName={setUserName}
			/>
			<Header />
			<Content
				setItemsInCart={setItemsInCart}
				loggedIn={loggedIn}
			/>
			<Footer />
		</div>
	);
}

export default App;
