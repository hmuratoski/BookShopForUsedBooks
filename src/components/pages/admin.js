import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Shop } from './shop';

//admin paneeli tuotteitten muokkausta varten.
//tehdään erillinen admin.php tiedosto;
//tarkistaa, onko requestin tekijä admin
//ottaa requestista $action argumentin samoin kun getData
//jonka mukaan päätetään mitä tehdään   (erillinen adminFunctions.php?)


export const AdminPanel = () => {


	const [loggedUser, setLoggedUser] = useState(null);
	const [errorText, setErrorText] = useState("");

	//Check login by session for the first time
	useEffect(() => {
		axios.post("adminlogin.php", {}, { withCredentials: true })
			.then(resp => setLoggedUser(resp.data))
			.catch(e => console.log(e.message));
	}, []);

	//Logging out -> server ends the session
	function logout() {
		axios.post("adminlogout.php", {}, { withCredentials: true })
			.then(resp => setLoggedUser(null))
			.catch(e => console.log(e.message));
	}

	//Conditional rendering depending on the login status.
	return (
		<div>
			{loggedUser && <button type="button" onClick={logout}>Logout</button>}
			{loggedUser ?
				<Shop uname={loggedUser} /> :
				<Login setLoggedUser={setLoggedUser} setError={setErrorText} />
			}
			{!loggedUser && <h3 style={{ color: 'red' }}>{errorText}</h3>}
		</div>
	);
}

/**
 * Login form. Sends the login data to the server and
 * sets the parent component username state if the login is successful.
 * Unsuccessful login sets error text retrieved from the server
 */
function Login({ setLoggedUser, setError }) {
	const [uname, setUname] = useState("");
	const [pw, setPw] = useState("");

	//Function for logging in with username/password
	function logIn() {
		const formData = new FormData();
		formData.append("uname", uname);
		formData.append("password", pw);

		axios.post("adminlogin.php", formData, { withCredentials: true })
			.then(resp => {
				setLoggedUser(resp.data);
				setError("");
			})
			.catch(e => setError(e.response.data));
	}

	return (
		<form>
			<label>Username:</label>
			<input type="text" value={uname} onChange={e => setUname(e.target.value)} />
			<label>Password:</label>
			<input type="password" value={pw} onChange={e => setPw(e.target.value)} />
			<button type="button" onClick={logIn}>Login</button>
		</form>
	)
}

// /**
//  * Showing the user page and retieving the user messages from the server
//  */
// function UserPage({ uname }) {
// 	const [messages, setMessages] = useState([]);

// 	useEffect(() => {
// 		axios.get(URL + "rest_user_info.php", { withCredentials: true })
// 			.then(resp => setMessages(resp.data.messages))
// 			.catch(e => console.log(e.message))
// 	}, []);

// 	return (
// 		<div>
// 			<h1>Welcome {uname}. Your message:</h1>
// 			<ul>
// 				{messages.map((msg, i) => <li key={"a" + i}>{msg}</li>)}
// 			</ul>
// 		</div>
// 	)
// }


function AddBook({ setBook }) {
	const [bookId, setBookid] = useState("");
	const [categoryId, setCategoryId] = useState("");
	const [bookName, setBookName] = useState("");
	const [price, setPrice] = useState("");
	const [author, setAuthor] = useState("");
	const [description, setDescription] = useState("");
	const [year, setYear] = useState("");
	const [condition, setCondition] = useState("");
	const [active, setActive] = useState("");

	function addbook(e) {

		const json = { bookId, categoryId, bookName, price, author, description, year, condition, active };

		axios.post("adminfunctions.php", json, { withCredentials: true })
			.then(resp => setBook(bookId))
			.catch(e => console.log(e.message));
	}


	return (
		<div>
			<form>
				<label>
					bookId
					<input type="text" onChange={e => setBookid(e.target.value)}></input>
				</label>
				<label>
					categoryId:
					<input type="password" onChange={e => setCategoryId(e.target.value)}></input>
				</label>
				<label>
					bookName:
					<input type="text" onChange={e => setBookName(e.target.value)}></input>
				</label>
				<label>
					price:
					<input type="text" onChange={e => setPrice(e.target.value)}></input>
				</label>
				<label>
					author:
					<input type="text" onChange={e => setAuthor(e.target.value)}></input>
				</label>
				<label>
					description
					<input type="text" onChange={e => setDescription(e.target.value)}></input>
				</label>
				<label>
					year:
					<input type="text" onChange={e => setYear(e.target.value)}></input>
				</label>
				<label>
					condition:
					<input type="text" onChange={e => setCondition(e.target.value)}></input>
				</label>
				<label>
					active:
					<input type="text" onChange={e => setActive(e.target.value)}></input>
				</label>
				<button type="button" onClick={addbook}>Add book</button>
			</form>
		</div>
	)
}

