import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/variables.js'

export function Footer() {
	return (
		<div>
			<footer className="py-5 bg-dark">
				<div className="container"><p className="m-0 text-center text-white">Copyright &copy; {language.shopName} 2022</p></div>
			</footer>
		</div>
	);
}
