import { language } from "../locale/FI";
import { useEffect } from 'react';

export const UsernamePassword = (props) => {
	
	useEffect(() => {
		if (props.setUserPassOk) {
			props.setUserPassOk(false);
		}
	}, [])

	const handleChange = () => {
		var username = document.getElementById("username");
		var password = document.getElementById("password");
		if (username.value.length > 0 && password.value.length >= 9) {
			password.style.borderColor = "green";
			password.style.borderColor = "green";
			props.setUserPassOk(true);
			console.log("Username and password OK");
			props.setUserPass({username: username.value, password: password.value})
		} else {
			props.setUserPassOk(false);
			if (password.value.length < 9) {
				password.style.borderColor = "red";
			}
			if (username.value.length == 0) {
				username.style.borderColor = "red";
			}
		}

	}

	return (
		<div>
			<input id="username" placeholder={language.userName} onChange={handleChange}/><br/>
			<input id="password" type="password" placeholder={language.password} onChange={handleChange}/>
		</div>
	)
}