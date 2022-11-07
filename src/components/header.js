import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI.js'
import '../css/Header.css';

//logot sun muut.

export const Header = () => {
	return (
		<div>
			<header className="bg-dark py-5 headerWrapper">
				<div className="headerContainer">
					<div className="col-sm">
						
					</div>
					<div className="headerTextWrapper text-center text-white">
						<div className="headerTopPadding"/>
						<h1 className="display-4 fw-bolder headerShopname">{language.shopName}</h1>
						<p className="lead fw-normal mb-0 headerSlogan">{language.shopSlogan}</p>
					</div>
				</div>
			</header>
		</div>
	);
}
