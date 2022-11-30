import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Orderdetails.css';
import { useState, useEffect } from 'react';
import { language } from '../../locale/FI';
import axios from 'axios';
import { Database } from '../../database/variables.js';
import { useLocation } from 'react-router-dom';

//ostoskorin jälkeinen formi asiakkaan maksu- ja toimitustietoja varten
//voidaan uudelleenkäyttää käyttäjäpaneelissa, tiedot ORDER tablen sijaan USERS tableen

export const OrderDetails = (props) => {

	const fields = [	'fname',	'lname',	'address',	'postalcode',	'city',	'email',	'phone']
	const types = [		'text',		'text',		'text',		'number',		'text',	'text',		'number']
	const lengthmax = [	'255',		'255',		'255',		'5',			'35',	'255',		'10']

	const [data, setData] = useState({});
	const location = useLocation();

	useEffect(() => {
	  	if (props.loggedIn) {
			console.log("on kirjauduttu, esitäytetään formi");

			axios.get(Database.requestUrl + "/user.php" + "?action=getUser&userName=" + props.userName).then((response) => {
				console.log(response.data);
				if (response.data.length == fields.length) {
					
					console.log("oikea määrä infoa saatu");
				}
			});

		}
	}, [])
	

	const updateData = (e) => {
		var errs = 0
		if (e.target.value.length > lengthmax[fields.indexOf(e.target.name)]) {
			e.target.value = e.target.value.slice(0, lengthmax[fields.indexOf(e.target.name)])
		} 
		
		if (e.target.value.length == 0) {
			e.target.style.borderColor = "red"
			errs++;
		} else {
			e.target.style.borderColor = "green"
		}
		if (e.target.name == "email") {
			if (!e.target.value.includes("@") ||
				!e.target.value.includes(".")) {
					errs++;
					e.target.style.borderColor = "red"
				} else {
					e.target.style.borderColor = "green"
				}
		} else if (e.target.name == "phone") {
			if (e.target.value.length != lengthmax[fields.indexOf(e.target.name)]) {
				errs++;
				e.target.style.borderColor = "red"
			} else {
				e.target.style.borderColor = "green"
			}
		} else if (e.target.name == "postalcode") {
			if (e.target.value.length != lengthmax[fields.indexOf(e.target.name)]) {
				errs++;
				e.target.style.borderColor = "red"
			} else {
				e.target.style.borderColor = "green"
			}
		}

		if (errs == 0) {
			setData({
				...data,
				[e.target.name]: e.target.value
			})
		} else {			//tyhjennetään muistissa oleva tieto ettei virheellistä tietoa mene läpi
			setData({
				...data,
				[e.target.name]: ""
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		var errs = 0;
		for (var i = 0; i < fields.length; i++) {
			if (!data[fields[i]] || data[fields[i]] == "") {
				errs++;
				console.log(fields[i] + " missing or invalid:");
				console.log(data);
				i = fields.length;
			}
		}
		if (errs == 0) {
			console.log("all fields seem ok")
		}
	}

	var i = -1;
	return (
		<div>
			<div className="container1 mt-2">
				<form>
					{fields.map((item) => {

						i++;
						return (
							<div key={item}>
								<input
									type={types[i]}
									name={item}
									placeholder={`${language[item]}`}
									onChange={updateData}
								/>
							</div>
						)

					})}
				</form>
				{location.pathname == "/orderdetails" ? 
					<button className="btn btn-outline-dark" type="submit" onClick={e => handleSubmit(e)}>{language.order}</button> 
					: 
					null
				}
			</div>
		</div>
	);
}
