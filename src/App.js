import React, { useState } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';

function App() {
	
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
