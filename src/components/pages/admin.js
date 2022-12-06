import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Orderdetails.css';
import { useState, useEffect } from 'react';
import { language } from '../../locale/FI';
import axios from 'axios';
import { Database } from '../../database/variables.js';
import { useLocation } from 'react-router-dom';




export const AdminAddBook = (props) => {
	const fields = [	'categoryId',	'bookName',	'price',	'author',	'description',	'year',	'condition' ,'active']
	const types = [		'number',		'text',		'number',		'text',		'text',	'number',		'number', 'number']
	const lengthmax = [	'5',		'255',		'35',		'255',			'255',	'5',	'10',	'5']

	const [data, setData] = useState({});
	const location = useLocation();

	useEffect(() => {
		const formData = new FormData();
		if (props.setDetailsOk) {
			props.setDetailsOk(false);
		}
	  	if (props.loggedIn) {
			formData.append("bookName", props.bookName);
			axios.post(Database.requestUrl + "/adminaddbook.php", formData, {withCredentials:true})
			.then((response) => {
				setData(response.data[0]);
				for (var i = 0; i < fields.length; i++) {
					document.getElementById(fields[i]).value = response.data[0][fields[i]];
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
		

		if (errs == 0) {
			setData({
				...data,
				[e.target.name]: e.target.value
			})
			errs = 0;
			for (var i = 0; i < fields.length; i++) {
				if (!data[fields[i]] || data[fields[i]] == "") {
					console.log(fields[i]);
					errs++;
					console.log(fields[i] + " missing or invalid:");
					i = fields.length;
				}
			}
			if (errs == 1) {
				if (props.setDetailsOk) {
					console.log("Details OK");
					props.setDetailsOk(true);
				}
			}
			if (props.setDetails) {
				props.setDetails(data);
			}
		} else {			//tyhjennetään muistissa oleva tieto ettei virheellistä tietoa mene läpi
			if (props.setDetailsOk) {
				props.setDetailsOk(false);
			}
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
									id={item}
									type={types[i]}
									name={item}
									placeholder={`${language[item]}`}
									onChange={updateData}
									onBlur={updateData}
								/>
							</div>
						)

					})}
				</form>
				{location.pathname == "/admin" ? 
					<button className="btn btn-outline-dark" type="submit" onClick={e => handleSubmit(e)}>{language.addbook}</button> 
					: 
					null
				}
			</div>
		</div>
	);
}
