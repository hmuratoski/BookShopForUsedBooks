import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Frontpage } from './pages/frontpage'
import { Catalog } from './catalog'

//kokoaa headerin ja footerin väliin tulevat komponentit

export function Content() {
	return (
		<div>
			<Catalog/>
		</div>
	);
}
