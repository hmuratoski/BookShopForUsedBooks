import React, { useState, useEffect } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { language } from './locale/FI.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {
	useEffect(() => {
		document.title = language.shopName;
	})

	return (
		<div>
			<Navbar/>
			<Header/>
			<Content/>
			<Footer/>
		</div>
	);
}

export default App;
