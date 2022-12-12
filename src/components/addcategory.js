import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Admin.css';
import { useState} from 'react';
import axios from 'axios';
import { Database } from '../database/variables';
import { language } from '../locale/FI';




export const AddCategory = () => {

	const [categoryName, setCategoryName] = useState('');
	

	const handleSubmit = (e) => {

		if(categoryName.length === 0) {
			alert("Category name kenttää ei voi jättää tyhjäksi!");
		} else {
			
			let fData = new FormData();
			fData.append('categoryName', categoryName);

			axios.post(Database.requestUrl + "/admin.php?action=addCategory", fData, {withCredentials:true})
			.then((response) => {
				
				if (response.data) {
					alert(`${language[response.data[2]]}`);
				}
			}).catch(e => console.log(e.message));
		}
		



	}

	return (

		<div className='admincontainer'>

			<h3>Lisää uusi kategoria tietokantaan</h3>


			<label htmlFor='categoryName'> Category name</label>
			<input type='text' name='categoryName' id='categoryName' value={categoryName} onChange={(e) => setCategoryName(e.target.value)}></input>

			<input type='button' className="btn btn-outline-dark" name='send' id='send' value={language.addcategory} onClick={e => handleSubmit(e)}></input>
		</div>

	);

	}
