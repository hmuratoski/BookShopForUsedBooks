import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Admin.css';
import { useState} from 'react';
import axios from 'axios';
import { Database } from '../../database/variables';
import { language } from '../../locale/FI';




export const AdminAddBook = () => {

	const [categoryId, setCategoryid] = useState('');
	const [bookName, setBookName] = useState('');
	const [price, setPrice] = useState('');
	const [author, setAuthor] = useState('');
	const [description, setDescription] = useState('');
	const [year, setYear] = useState('');
	const [condition, setCondition] = useState('');
	const [active, setActive] = useState('');

	const handleSubmit = (e) => {

		if(categoryId.length === 0) {
			alert("Category ID kenttää ei voi jättää tyhjäksi!");
		}
		else if(bookName.length === 0) {
			alert("Book name kenttää ei voi jättää tyhjäksi!");
		}
		else if(price.length === 0) {
			alert("Price kenttää ei voi jättää tyhjäksi!");
		}
		else if(author.length === 0) {
			alert("Author kenttää ei voi jättää tyhjäksi!");
		}
		else if(description.length === 0) {
			alert("Description kenttää ei voi jättää tyhjäksi!");
		}
		else if(year.length === 0) {
			alert("Year kenttää ei voi jättää tyhjäksi!");
		}
		else if(condition.length === 0) {
			alert("Condition kenttää ei voi jättää tyhjäksi!");
		}
		else if(active.length === 0) {
			alert("Active kenttää ei voi jättää tyhjäksi!");
		}

		else {


			let fData = new FormData();
			fData.append('categoryId', categoryId);
			fData.append('bookName', bookName);
			fData.append('price', price);
			fData.append('author', author);
			fData.append('description', description);
			fData.append('year', year);
			fData.append('condition', condition);
			fData.append('active', active);

			axios.post(Database.requestUrl + "/admin.php?action=addBook", fData, {withCredentials:true})
			.then((response) => {
				
				if (response.data) {
					alert(`${language[response.data[2]]}`);
				}
			}).catch(e => console.log(e.message));
		}
		



	}

	return (

		<div className='admincontainer'>

			<h3>Lisää uusi kirja tietokantaan</h3>


			<label htmlFor='categoryId'> Category ID</label>
			<input type='number' name='categoryId' id='categoryId' value={categoryId} onChange={(e) => setCategoryid(e.target.value)}></input>

			<label htmlFor='bookName'> Book name</label>
			<input type='text' name='bookName' id='bookName' value={bookName} onChange={(e) => setBookName(e.target.value)}></input>

			<label htmlFor='price'> Price</label>
			<input type='number' name='price' id='price' value={price} onChange={(e) => setPrice(e.target.value)}></input>

			<label htmlFor='author'> Author </label>
			<input type='text' name='author' id='author' value={author} onChange={(e) => setAuthor(e.target.value)}></input>

			<label htmlFor='description'> Description</label>
			<input type='text' name='description' id='description' value={description} onChange={(e) => setDescription(e.target.value)}></input>

			<label htmlFor='year'> Year</label>
			<input type='number' name='year' id='year' value={year} onChange={(e) => setYear(e.target.value)}></input>

			<label htmlFor='condition'> Condition</label>
			<input type='text' name='condition' id='condition' value={condition} onChange={(e) => setCondition(e.target.value)}></input>

			<label htmlFor='active'> Active</label>
			<input type='number' name='active' id='active' value={active} onChange={(e) => setActive(e.target.value)}></input>

			<input type='button' name='send' id='send' value='LISÄÄ KIRJA' onClick={e => handleSubmit(e)}></input>
		</div>

	);

	}

