import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { language } from '../locale/variables';
import '../css/About.css';

export function Team() {
	return (
		<div className="teamWrapper">
			<div className="teamPadding"/>
			<div className="profile">
				<h6>Juho Sandelin</h6>
				<img className="profileImage" src={require('../images/team/192454.png')}/>
			</div>
			<div className="profile">
				<h6>Halid Muratoski</h6>
				<img className="profileImage" src={require('../images/team/179545.png')}/>
			</div>
			<div className="profile">
				<h6>Janne Råman</h6>
				<img className="profileImage" src={require('../images/team/192245.png')}/>
			</div>
			<div className="profile">
				<h6>Mira Säkkinen</h6>
				<img className="profileImage" src={require('../images/team/unknown.jpg')}/>
			</div>
			<div className="profile">
				<h6>Joku Jäbä</h6>
				<img className="profileImage" src={require('../images/team/unknown.jpg')}/>
			</div>
			<div className="teamPadding"/>
		</div>
	);
}
