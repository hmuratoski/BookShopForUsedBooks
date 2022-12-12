import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/FI';
import '../css/About.css';

export const Team = () => {
	return (
		<div className="teamWrapper row justify-content-center">
			<div className="profile">
				<h6>Juho</h6>
				<h6>Sandelin</h6>
				<img className="profileImage" src={require('../images/team/192454.png')}/>
			</div>
			<div className="profile">
				<h6>Halid</h6>
				<h6>Muratoski</h6>
				<img className="profileImage" src={require('../images/team/179545.png')}/>
			</div>
			<div className="profile">
				<h6>Janne</h6>
				<h6>Råman</h6>
				<img className="profileImage" src={require('../images/team/192245.png')}/>
			</div>
		</div>
	);
}
