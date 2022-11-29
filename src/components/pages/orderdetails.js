import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Orderdetails.css';
import { useState } from 'react';
import { language } from '../../locale/FI';

//ostoskorin jälkeinen formi asiakkaan maksu- ja toimitustietoja varten
//voidaan uudelleenkäyttää käyttäjäpaneelissa, tiedot ORDER tablen sijaan USERS tableen

export const OrderDetails = () => {

	const fields = ['fname',	'lname',	'address',	'postalcode',	'city',	'email',	'phone']
	const types = ['text',		'text',		'text',		'number',		'text',	'text',		'number']
	const length = ['255',		'255',		'255',		'5',			'35',	'255',	'10']

	const [data, setData] = useState({})

	const updateData = (e) => {
		var err = 0;
		console.log(length[fields.indexOf(e.target.name)])
		console.log(e.target.value.length)
		if (e.target.value.length > length[fields.indexOf(e.target.name)]) {
			err++
			e.target.value = e.target.value.slice(0, length[fields.indexOf(e.target.name)])
		} 
		
		if (e.target.value.length == 0) {
			e.target.style.borderColor = "red"
			err++;
		} else if (e.target.name == "email") {
			if (!e.target.value.includes("@") ||
				!e.target.value.includes(".")) {
					err++;
					console.log("email invalid");
					e.target.style.borderColor = "red"
				} else {
					e.target.style.borderColor = "green"
				}
		} else if (e.target.name == "phone") {
			if (e.target.value.length != 10) {
				err++;
				e.target.style.borderColor = "red"
			} else {
				e.target.style.borderColor = "green"
			}
		} else if (e.target.name == "postalcode") {
			if (e.target.value.length != 5) {
				err++;
				e.target.style.borderColor = "red"
			} else {
				e.target.style.borderColor = "green"
			}
		}

		if (err == 0) {
			setData({
				...data,
				[e.target.name]: e.target.value
			})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		for (var i = 0; i < fields.length; i++) {
			if (!data[fields[i]]) {
				console.log(fields[i] + " missing")
				i = fields.length;
			}
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
								<label>{`${language[item]}`}</label>
								<input
									type={types[i]}
									name={item}
									onChange={updateData}
								/>
							</div>
						)

					})}
				</form>
				<button type="submit" onClick={e => handleSubmit(e)}>{language.submit}</button>	{/* pitää muuttaa myöhemmin, poistin classin tältä koska ei jää pysyvästi tähän */}
			</div>
		</div>
	);
}
