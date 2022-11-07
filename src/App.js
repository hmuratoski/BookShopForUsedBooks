import React, { useState } from 'react';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Navbar } from './components/navbar';
import { Team } from './components/team'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/App.css';
import './fonts/SignikaNegative-Regular.ttf';

function App() {
	
	return (
		<div>
			<Navbar/>
			<Header/>
			<Content/>
			<Team/>     {/*purkka-ratkaisu esitystä varten, voidaan myöhemmin siirtää about sivulle*/}
			<Footer/>
		</div>
	);
}

export default App;
