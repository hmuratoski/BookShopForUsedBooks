import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { language } from './locale/FI.js';
import { Database } from './database/variables';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {

	console.log(useLocation().pathname);                //pitää tarkistaa opettajalta, onko käyttökelpoinen product sivulle

	const [loggedIn, setLoggedIn] = useState(false);
	const [userName, setUserName] = useState('');

	//näitä voi muuttaa
	const [itemsInCart, setItemsInCart] = useState(0);  //asettaa ostoskorin tuotteet, otetaan myöhemmin kekseistä

	const logOut = () => {
		axios.post(Database.requestUrl + "/user.php?action=logout", {}, {withCredentials:true})
		.then(response => {
			setLoggedIn(false);
			setUserName("");
			console.log(response);
		})
		.catch(e => console.log(e.message));
	}

	useEffect(() => {
		axios.post(Database.requestUrl + "/user.php?action=loginSession", {}, {withCredentials:true} )
			.then((response) => {
				if (response.data) {
					console.log(response);
					console.log("Logging in with session information");
					setUserName(response.data);
					setLoggedIn(true);
				}
			}).catch(e => console.log(e.message));

		document.title = language.shopName;             //asettaa välilehden titlen
		var cookie = localStorage.shoppingCart;
		
		if (cookie) {
			try {
				let obj = JSON.parse(cookie);
				setItemsInCart(obj.length);
			} catch {
				localStorage.removeItem("shoppingCart");
				localStorage.shoppingCart = [];
			}
		} else {
			localStorage.shoppingCart = [];
			setItemsInCart(0);
		}
	})

	return (
		<div>
			<Navbar
				itemsInCart={itemsInCart}
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				logOut={logOut}
				userName={userName}
				setUserName={setUserName}
			/>
			<Header />
			<Content
				setItemsInCart={setItemsInCart}
				loggedIn={loggedIn}
				userName={userName}
			/>
			<Footer />
		</div>
	);
}

export default App;
