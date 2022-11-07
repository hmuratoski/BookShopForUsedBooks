import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Catalog } from './catalog';
import { Category } from './category';
import '../css/Content.css'

//kokoaa headerin ja footerin väliin tulevat komponentit

export const Content = () => {
	return (
		<div className="pageContent">
			<Category/>     {/*filtterit*/}
			<Catalog/>      {/*tuotteet*/}
		</div>
	);
}
