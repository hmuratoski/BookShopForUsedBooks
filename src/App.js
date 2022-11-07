import React, { useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Login } from './components/login';
import { language } from './locale/FI.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {
	useEffect(() => {
		document.title = language.shopName;
	})

	return (
		<div>
			<Navbar itemsInCart="5"/>
			<Header/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default App;
