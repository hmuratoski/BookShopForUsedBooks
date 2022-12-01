
import '../../css/Register.css';
import { language } from '../../locale/FI';
import { UsernamePassword } from '../usernamepassword';
import { OrderDetails } from './orderdetails';
import { useState } from 'react';
import { Database } from '../../database/variables';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export const Register = (props) => {

	var registerErr;

	let navigate = useNavigate();
	const [detailsOk, setDetailsOk] = useState('false');
	const [userPassOk, setUserPassOk] = useState('false');
	const [userPass, setUserPass] = useState({});
	const [details, setDetails] = useState({});


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

		console.log(values);

		if (values == 9) {
		axios.post(Database.requestUrl + "/register.php", formData, { validateStatus: () => true })
			.then((response) => {
				if (response.data) {
					if (!response.data[1]) {
						console.log("Error message: " + response.data[2])
						console.log(response.data[0]);
						registerErr = response.data[2];
					} else {
						props.setLoggedIn(true);
						props.setUserName(userPass["username"]);
						navigate("/shop");
					}
				}
			}).catch(e => console.log(e.message));
		}

	}

	return (
		<div className="container1 mt-2">
			<UsernamePassword setUserPassOk={setUserPassOk} setUserPass={setUserPass} />
			<OrderDetails setDetailsOk={setDetailsOk} setDetails={setDetails} />
			{(detailsOk && userPassOk) ?
				<button className="btn btn btn-outline-dark" onClick={e => handleClick(e)}>{language.register}</button>
				:
				<button className="btn btn btn-outline-dark" disabled>{language.register}</button>
			}
			<h2>{registerErr}</h2>
		</div>
	)
}