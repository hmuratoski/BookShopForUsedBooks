import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from './variables';
import '../css/Navbar.css';

export function Navbar() {
	return (
		<div className="navbarWrapper">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container px-4 px-lg-5">
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
							<li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">{language.navHome}</a></li>
							<li className="nav-item"><a className="nav-link" href="#!">{language.navAbout}</a></li>
							<li className="nav-item"><a className="nav-link" href="#!">{language.navShop}</a></li>
						</ul>
						<form className="d-flex">
							<button className="btn btn-outline-dark" type="submit">
								<i className="bi-cart-fill me-1"></i>
								{language.navCart}
								<span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
							</button>
						</form>
					</div>
				</div>
			</nav>
		</div>
	);
}
