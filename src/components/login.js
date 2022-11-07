import React from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import { language } from '../locale/FI.js'

//kokoaa headerin ja footerin väliin tulevat komponentit

export const Login = (props) => {
	return (
		<div className="toastLogin">
			<div className="toast show" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<img src={require('../images/team/unknown.png')} className="rounded mr-2 toastIcon" alt="..." />
					<strong className="mr-auto">{language.loginTitle}</strong>
					<button type="button" className="closeButton" aria-label="Close" onClick={event => props.setShowLogin(false)} />
				</div>
				<div className="toast-body">
					<input className="toastInput"/><br />
					<input className="toastInput"/><br />
					<button className="btn btn-secondary loginButton">{language.loginTitle}</button>
				</div>
			</div>
		</div>
	);
}

