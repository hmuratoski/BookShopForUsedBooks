import { language } from "../locale/FI";
import { useEffect } from 'react';

export const UsernamePassword = (props) => {
	
	useEffect(() => {
		if (props.setUserPassOk) {
			props.setUserPassOk(false);
		}
	}, [])

	const handleChange = (e) => {
		if (e.target.id == "username") {
			if (e.target.value.length < 1) {
				e.target.style.borderColor = "red";
			} else {
				e.target.style.borderColor = "green";
			}
		} else if (e.target.id == "password") {
			if (e.target.value.length < 9) {
				e.target.style.borderColor = "red";
			} else {
				e.target.style.borderColor = "green";
			}
		}
		var username = document.getElementById("username").value;
		var password = document.getElementById("password").value;

		if (username.length > 0 && password.length > 8) {
			props.setUserPassOk(true);
			props.setUserPass({username: username, password: password})
			console.log("Username and password ok");
		} else {
			props.setUserPassOk(false);
		}
	}

	return (
		<div>
			<input id="username" placeholder={language.userName} onChange={e => handleChange(e)}/><br/>
			<input id="password" type="password" placeholder={language.password} onChange={handleChange}/>
		</div>
	)
}