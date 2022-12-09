import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AddBook } from '../addbook';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Database } from '../../database/variables';

export const Admin = () => {

	const [isAdmin, setAdmin] = useState(false);
	const [adminLevel, setLevel] = useState(0);

	useEffect(() => {
		axios.post(Database.requestUrl + "/admin.php?action=getLevel", {}, {withCredentials:true})
		.then((response) => {
			if (response.data[2] == "isAdmin" && response.data[1] == true) {
				setAdmin(true);
				setLevel(response.data[3][0]["level"]);
				console.log("Admin level: " + response.data[3][0]["level"])
			}
		}).catch(e => console.log(e.message));
	}, [])
	

	if (adminLevel == 3 && isAdmin) {
	return (
		<div>

			<AddBook/>
		
			
		</div>
	);
	} else {
		<div>Unauthorized</div>
	}
}
