import React from 'react';
import { useEffect } from 'react';
import { Shop } from './pages/shop'
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {

	return (
		<Shop loggedIn={props.loggedIn}/>
	);
}
