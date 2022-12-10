import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Admin.css';
import { useState} from 'react';
import axios from 'axios';
import { Database } from '../database/variables';
import { language } from '../locale/FI';




export const BookStatus = () => {

	const [bookId, setBookId] = useState('');
    const [active, setActive] = useState('');


	const handleSubmit = (e) => {

		if(bookId.length === 0) {
			alert("Category ID kenttää ei voi jättää tyhjäksi!");
		}

        else if(active.length === 0) {
			alert("Book name kenttää ei voi jättää tyhjäksi!");
		}

		else {

			let fData = new FormData();
			fData.append('bookId', bookId);
            fData.append('active', active);

			axios.post(Database.requestUrl + "/admin.php?action=bookStatus", fData, {withCredentials:true})
			.then((response) => {
				console.log(response)
				
				if (response.data) {
					//alert(`${language[response.data[2]]}`);
                    alert("Kirjan tila muutettu onnistuneesti!")
				}
			}).catch(e => console.log(e.message));
		}
		



	}

	return (

		<div className='admincontainer'>

			<h3>Muuta kirjan activity: 1 (on valikoimassa) tai 0 (ei ole valikoimassa)</h3>


			<label htmlFor='bookId'> Book ID</label>
			<input type='number' name='bookId' id='bookId' value={bookId} onChange={(e) => setBookId(e.target.value)}></input>

            <label htmlFor='active'> 1 tai 0</label>
			<input type='number' name='active' id='active' value={active} onChange={(e) => setActive(e.target.value)}></input>


			<input type='button' className="btn btn-outline-dark" name='send' id='send' value={language.setbookstatus} onClick={e => handleSubmit(e)}></input>
		</div>

	);

	}

