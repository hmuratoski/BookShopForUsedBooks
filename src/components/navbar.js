import React from 'react';
import { Route, Routes, Link } from "react-router-dom"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI';
import { Login } from '../components/login'
import { Shop } from './pages/shop'
import { FrontPage } from './pages/frontpage'
import { About } from './pages/about'

import '../css/Navbar.css';



export const Navbar = (props) => {
	const [showLogin, setShowLogin] = useState(false);

	const toggleLogin = () => {
		if (showLogin) {
			setShowLogin(false);
		} else {
			setShowLogin(true);
		}
	}

	const LoginButton = () => {
		if (showLogin && !props.loggedIn) {
			return (
				<button className="btn btn-outline-dark active" type="button" onClick={event => toggleLogin()}>{language.loginTitle}</button>
			)
		} else {
			return (
				<button className="btn btn-outline-dark" type="button" onClick={event => toggleLogin()}>{language.loginTitle}</button>
			)
		}
	}

	return (
		<div className="navbarWrapper">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container px-4 px-lg-5">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
							<li className="nav-item"><Link to="/" className="nav-link" aria-current="page">{language.navHome}</Link></li>
							<li className="nav-item"><Link to="/about" className="nav-link">{language.navAbout}</Link></li>
							<li className="nav-item"><Link to="/shop" className="nav-link">{language.navShop}</Link></li>
						</ul>
					</div>
					<form className="d-flex">
						{!props.loggedIn ?
							<LoginButton />
							:
							<button className="btn btn-outline-dark" type="button" onClick={event => props.setLoggedIn(false)} >{props.userName}</button>        //jos kirjauduttu, näyttää käyttäjäpaneelin nappulan
						}

						<button className="btn btn-outline-dark cartButton" type="submit">
							<i className="bi-cart-fill me-1"></i>
							<img className="cartIcon" src={require('../images/cart.png')} />
							<span className="badge bg-dark text-white ms-1 rounded-pill">{props.itemsInCart}</span>
						</button>
					</form>
				</div>
			</nav>
			{showLogin ? <Login setShowLogin={setShowLogin} setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} /> : null}
		</div>
	);
}
