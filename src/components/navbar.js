import React from 'react';
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI';
import { Login } from '../components/login'

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
							<li className="nav-item"><NavLink to="/" className="nav-link" aria-current="page">{language.navHome}</NavLink></li>
							<li className="nav-item"><NavLink to="/shop" className="nav-link">{language.navShop}</NavLink></li>
							<li className="nav-item"><NavLink to="/about" className="nav-link">{language.navAbout}</NavLink></li>
						</ul>
					</div>
					<form className="d-flex">
						{!props.loggedIn ?
							<LoginButton />
							:
							<button className="btn btn-outline-dark" type="button" onClick={event => props.setLoggedIn(false)} >{props.userName}</button>        //jos kirjauduttu, näyttää käyttäjäpaneelin nappulan
						}
						{props.itemsInCart > 0 ?
							<NavLink to="cart">
								<button className="btn btn-outline-dark cartButton">
									<i className="bi-cart-fill me-1"></i>
									<img className="cartIcon" src={require('../images/cart.png')} />
									<span className="badge bg-dark text-white ms-1 rounded-pill">{props.itemsInCart}</span>
								</button>
							</NavLink>
							:
							<div className="btn btn-outline-dark cartButton">
								<i className="bi-cart-fill me-1"></i>
								<img className="cartIcon" src={require('../images/cart.png')} />
								<span className="badge bg-dark text-white ms-1 rounded-pill">{props.itemsInCart}</span>
							</div>
						}
					</form>
				</div>
			</nav>
			{showLogin ? <Login setShowLogin={setShowLogin} setLoggedIn={props.setLoggedIn} setUserName={props.setUserName} /> : null}
		</div>
	);
}
