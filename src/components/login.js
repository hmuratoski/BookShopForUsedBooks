import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css';
import axios from 'axios';
import { Database } from '../database/variables';
import { language } from '../locale/FI.js'
import { NavLink } from 'react-router-dom';

//toast -tyyppinen kirjautumisruutu
	//hyväksyy tällähetkellä minkä tahansa käyttäjänimen testikirjautumiseen

export const Login = (props) => {

	const HandleLogin = () => {
		var username = document.getElementById('userName').value;
		var password = document.getElementById('password').value;

		const formData = new FormData();
		formData.append("username", username);
		formData.append("password", password);
		if (username && password) {
		axios.post(Database.requestUrl + "/user.php?action=login", formData, {withCredentials:true} )
			.then((response) => {
				if (response.data["status"] == true) {
					props.setUserName(response.data["username"]);
					props.setLoggedIn(true);
					props.setShowLogin(false);
				}
			}).catch(e => console.log(e.message));
		}
	}


	return (
		<div className="toastLogin">
			<div className="toast show" aria-live="assertive" aria-atomic="true">
				<div className="toast-header">
					<img src={require('../images/team/unknown.png')} className="rounded mr-2 toastIcon" alt="..." />
					<strong className="mr-auto loginTitle">{language.loginMessage}</strong>
					<button type="button" className="closeButton" aria-label="Close" onClick={event => props.setShowLogin(false)} />
				</div>
				<div className="toast-body">
					<input className="toastInput" id="userName" placeholder={language.userName}/><br/>
					<input className="toastInput" id="password" type="password" placeholder={language.password}/><br/>
					<button className="btn btn-secondary loginButton" onClick={HandleLogin}>{language.loginTitle}</button>
					<NavLink 
						style={{
							right: "15px", 
							position: "absolute", 
							paddingTop: "10px"
						}} 
						to="/register" 
						onClick={event => props.setShowLogin(false)}
					>{language.register}</NavLink>
				</div>
			</div>
		</div>
	);
}
