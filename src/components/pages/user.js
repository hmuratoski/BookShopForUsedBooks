// import React from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useEffect, useState } from 'react';
// import { Catalog } from '../catalog';
// import { Category } from '../category';
// import { Database } from '../../database/variables.js';

// //user paneeli, käyttäjätietojen muokkausta varten

// const SetDetails = (props) => {
// 	const fields = [	'fname',	'lname',	'address',	'postalcode',	'city',	'email',	'phone']
// 	const types = [		'text',		'text',		'text',		'number',		'text',	'text',		'number']
// 	const lengthmax = [	'255',		'255',		'255',		'5',			'35',	'255',		'10']

// 	const [data, setData] = useState({});

// 	useEffect(() => {
// 		const formData = new FormData();
// 		if (props.setDetails) {
// 			props.setDetails(false);
// 		}
// 	  	if (props.loggedIn) {
// 			formData.append("username", props.userName);
// 			axios.post(Database.requestUrl + "/user.php" + "?action=getUser", formData, {withCredentials:true})
// 			.then((response) => {
// 				setData(response.data[0]);
// 				for (var i = 0; i < fields.length; i++) {
// 					document.getElementById(fields[i]).value = response.data[0][fields[i]];
// 				}
// 			});
// 		}
// 	}, [])
	

// 	const updateData = (e) => {
// 		var errs = 0
// 		if (e.target.value.length > lengthmax[fields.indexOf(e.target.name)]) {
// 			e.target.value = e.target.value.slice(0, lengthmax[fields.indexOf(e.target.name)])
// 		} 
		
// 		if (e.target.value.length == 0) {
// 			e.target.style.borderColor = "red"
// 			errs++;
// 		} else {
// 			e.target.style.borderColor = "green"
// 		}
// 		if (e.target.name == "email") {
// 			if (!e.target.value.includes("@") ||
// 				!e.target.value.includes(".")) {
// 					errs++;
// 					e.target.style.borderColor = "red"
// 				} else {
// 					e.target.style.borderColor = "green"
// 				}
// 		} else if (e.target.name == "phone") {
// 			if (e.target.value.length != lengthmax[fields.indexOf(e.target.name)]) {
// 				errs++;
// 				e.target.style.borderColor = "red"
// 			} else {
// 				e.target.style.borderColor = "green"
// 			}
// 		} else if (e.target.name == "postalcode") {
// 			if (e.target.value.length != lengthmax[fields.indexOf(e.target.name)]) {
// 				errs++;
// 				e.target.style.borderColor = "red"
// 			} else {
// 				e.target.style.borderColor = "green"
// 			}
// 		}

// 		if (errs == 0) {
// 			setData({
// 				...data,
// 				[e.target.name]: e.target.value
// 			})
// 			errs = 0;
// 			for (var i = 0; i < fields.length; i++) {
// 				if (!data[fields[i]] || data[fields[i]] == "") {
// 					console.log(fields[i]);
// 					errs++;
// 					console.log(fields[i] + " missing or invalid:");
// 					i = fields.length;
// 				}
// 			}
// 			if (errs == 1) {
// 				if (props.setDetailsOk) {
// 					console.log("Details OK");
// 					props.setDetails(true);
// 				}
// 			}
// 			if (props.setDetails) {
// 				props.setDetails(data);
// 			}
// 		} else {			//tyhjennetään muistissa oleva tieto ettei virheellistä tietoa mene läpi
// 			if (props.setDetails) {
// 				props.setDetails(false);
// 			}
// 			setData({
// 				...data,
// 				[e.target.name]: ""
// 			})
// 		}
// 	}

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		var errs = 0;
// 		for (var i = 0; i < fields.length; i++) {
// 			if (!data[fields[i]] || data[fields[i]] == "") {
// 				errs++;
// 				console.log(fields[i] + " missing or invalid:");
// 				i = fields.length;
// 			}
// 		}
// 		if (errs == 0) {
// 			console.log("all fields seem ok")
// 		}
// 	}

// 	var i = -1;
	
// 	return (
// 		<div>
// 			<div className="container1 mt-2">
// 				<form>
// 					{fields.map((item) => {

// 						i++;
// 						return (
// 							<div key={item}>
// 								<input
// 									id={item}
// 									type={types[i]}
// 									name={item}
// 									placeholder={`${language[item]}`}
// 									onChange={updateData}
// 									onBlur={updateData}
// 								/>
// 							</div>
// 						)

// 					})}
// 				</form>
// 				<SetDetails setDetails={SetDetails}/>

// 			</div>
// 		</div>
// 	);
// }
