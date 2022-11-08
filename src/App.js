import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { language } from './locale/FI.js';


import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {

	const [loggedIn, setLoggedIn] = useState(true);
	const [userName, setUserName] = useState('TestiKäyttäjä');        //testausta varten
	const [itemsInCart, setItemsInCart] = useState(5);


	useEffect(() => {
		document.title = language.shopName;
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
				<Content loggedIn={loggedIn}/>
			<Footer />
		</div>
	);
}

export default App;
