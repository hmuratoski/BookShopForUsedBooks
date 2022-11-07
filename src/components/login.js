import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css'
import { language } from '../locale/FI.js'

//kokoaa headerin ja footerin väliin tulevat komponentit

export const Login = () => {
	return (
		<div className="toastLogin">
			<div className="toast show" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<img src={require('../images/team/unknown.png')} className="rounded mr-2 toastIcon" alt="..." />
					<strong className="mr-auto">{language.loginTitle}</strong>
					<button type="button" className="closeButton" data-dismiss="toast" aria-label="Close">
					</button>
				</div>
				<div className="toast-body">
					<input /><br/>
					<input /><br/>
					<button className="btn btn-secondary loginButton">{language.loginTitle}</button>
				</div>
			</div>
		</div>
	);
}
