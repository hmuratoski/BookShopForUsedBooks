import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from './variables.js'
import '../css/Header.css';

//logot sun muut

export function Header() {
	return (
		<div>
			<header class="bg-dark py-5">
				<div class="container px-4 px-lg-5 my-5 row">
					<div class="col-sm">
						<img src={require('../images/book.png')} className="headerLogo" class="img-fluid" />
					</div>
					<div class="text-center text-white col-sm" style={{display: "inline-block"}}>
						<h1 class="display-4 fw-bolder">{language.shopName}</h1>
						<p class="lead fw-normal text-white-50 mb-0">{language.shopSlogan}</p>
					</div>
				</div>
			</header>
		</div>
	);
}
