import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Database } from '../../database/variables.js';
import { UsernamePassword } from '../usernamepassword.js';
import { language } from '../../locale/FI';
import { OrderDetails} from "./orderdetails.js";
import { useNavigate } from 'react-router-dom';

	export const UserPanel = (props) => {

		const navigate = useNavigate();

		const [detailsOk, setDetailsOk] = useState('false');
		const [userPassOk, setUserPassOk] = useState('false');
		const [userPass, setUserPass] = useState({});
		const [details, setDetails] = useState({});

		const logout = (props) => {
			props.logOut();
			navigate(-1);
		}

		const handleClick = () => {
			const formData = new FormData();
			var values = 0;
	
			for (const key in userPass) {
				values++;
				formData.append(key, userPass[key]);
			}
			for (const key in details) {
				values++;
				formData.append(key, details[key]);
			}
			
			if (values == 9) {
			axios.post(Database.requestUrl + "/updatedata.php", formData, {withCredentials:true})
				.then((response) => {
					if (response.data) {
						if (response.data[2] != "updateSuccess") {
							alert(`${language[response.data[2]]}`);
						} else {
							alert(language.updateSuccess);
						}
					} else {
						alert(language.loginTryAgain);
					}
				}).catch(e => console.log(e.message));
			}
		}
	return (
		<div className="container1 mt-2">
			<UsernamePassword setUserPassOk={setUserPassOk} setUserPass={setUserPass} />
			<OrderDetails 
				setDetailsOk={setDetailsOk}
				setDetails={setDetails} 
				userName={props.userName}
				loggedIn={props.loggedIn}
			/>
			{(detailsOk && userPassOk) ?
				<button className="btn btn btn-outline-dark" onClick={e => handleClick(e)}>{language.change}</button>
				:
				<button className="btn btn btn-outline-dark" disabled>{language.change}</button>
			}

			<button className="btn btn btn-outline-dark" onClick={e => logout(props)}>{language.logOut}</button>
		</div>
	)
}