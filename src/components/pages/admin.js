import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Catalog } from '../catalog';
import { Category } from '../category';
import { Database } from '../../database/variables.js';

//admin paneeli tuotteitten muokkausta varten.
//tehdään erillinen admin.php tiedosto;
	//tarkistaa, onko requestin tekijä admin
	//ottaa requestista $action argumentin samoin kun getData
		//jonka mukaan päätetään mitä tehdään   (erillinen adminFunctions.php?)

export const AdminPanel = () => {



	function addBook({setBook}){
		const [bookId, setBookid] = useState("");
		const [categoryId, setCategoryId] = useState("");
		const [bookName, setBookName] = useState("");
		const [price, setPrice] = useState("");
		const [author, setAuthor] = useState("");
		const [description, setDescription] = useState("");
		const [year, setYear] = useState("");
		const [condition, setCondition] = useState("");
		const [active, setActive] = useState("");
	  
		function addbook(e){
	  
		  const json = {bookId, categoryId,bookName, price,author,year,condition, active}; //same as {uname:uname, pw:pw}
				//Juho: tavara palvelimelle formDatana, ks. register.js:HandleClick. Suosittelen siirtämään muuttujat ja funktion addBook komponenttiin
		  //Sendig form data to server register. WithCredentials is required for cookies/sessions to work.
		  //Successful response sets the parent component username state
		  axios.post("/adminfunctions.php",  json, {withCredentials: true})
			.then(resp => setBook(bookId,categoryId,bookName,price,author, description, year,condition,active))
			.catch(e=> console.log(e.message));
		}
	  
		return(
		  <div>
			<form>
			  <label>
				bookId
				<input type="text" onChange={e=>setBookid(e.target.value)}></input>
			  </label>
			  <label>
				categoryId:
				<input type="password" onChange={e=>setCategoryId(e.target.value)}></input>
			  </label>
			  <label>
				bookName:
				<input type="text" onChange={e=>setBookName(e.target.value)}></input>
			  </label>
			  <label>
				price:
				<input type="text" onChange={e=>setPrice(e.target.value)}></input>
			  </label>
			  <label>
				author:
				<input type="text" onChange={e=>setAuthor(e.target.value)}></input>
			  </label>
			  <label>
				description
				<input type="text" onChange={e=>setDescription(e.target.value)}></input>
			  </label>
			  <label>
				year:
				<input type="text" onChange={e=>setYear(e.target.value)}></input>
			  </label>
			  <label>
				condition:
				<input type="text" onChange={e=>setCondition(e.target.value)}></input>
			  </label>
			  <label>
				active:
				<input type="text" onChange={e=>setActive(e.target.value)}></input>
			  </label>
			  <button type="button" onClick={register}>Register</button>
			</form>
		  </div>
		)
	  }
}
