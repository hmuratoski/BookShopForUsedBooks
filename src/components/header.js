import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from './variables.js'

//logot sun muut

export function Header() {
	return (
		<div>
			<header class="bg-dark py-5">
				<div class="container px-4 px-lg-5 my-5">
				<img src={require('../images/book.png')} class="img-fluid" alt="Responsive image"></img>
					<div class="text-center text-white">
						<h1 class="display-4 fw-bolder">{language.shopName}</h1>
						<p class="lead fw-normal text-white-50 mb-0">{language.shopSlogan}</p>
					</div>
				</div>
			</header>
		</div>
	);
}
