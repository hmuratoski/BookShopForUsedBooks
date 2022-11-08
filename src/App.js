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

	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');
	
	//näitä voi muuttaa
	const [itemsInCart, setItemsInCart] = useState(5);  //asettaa ostoskorin tuotteet
	const page = useState("Shop");                      //vaihtaa sivua testausta varten ennen routingia //Home, About, Shop (content.js)
	
	
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
				<Content 
					page={page}
					loggedIn={loggedIn
				}/>
			<Footer />
		</div>
	);
}

export default App;
