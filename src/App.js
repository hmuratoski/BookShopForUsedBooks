import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Login } from './components/login';
import { language } from './locale/FI.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {
	
	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('Testi')
	const [itemsInCart, setItemsInCart] = useState(5)
	

	useEffect(() => {
		document.title = language.shopName;
	})

	return (
		<div>
			<Navbar itemsInCart={itemsInCart} loggedIn={loggedIn} userName={userName}/>
			<Header/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default App;
