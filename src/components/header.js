import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/variables.js'
import '../css/Header.css';

//logot sun muut.

export function Header() {
	return (
		<div>
			<header className="bg-dark py-5 headerWrapper">
				<div className="container px-4 px-lg-5 my-5 row">
					<div className="col-sm">
						<img src={require('../images/book.png')} className="headerLogo"/>
					</div>
					<div className="headerTextWrapper text-center text-white col-sm">
						<h1 className="display-4 fw-bolder">{language.shopName}</h1>
						<p className="lead fw-normal text-white-50 mb-0">{language.shopSlogan}</p>
					</div>
				</div>
			</header>
		</div>
	);
}
