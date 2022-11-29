import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Orderdetails.css';
import { useState } from 'react';
import { language } from '../../locale/FI';

//ostoskorin jälkeinen formi asiakkaan maksu- ja toimitustietoja varten
//voidaan uudelleenkäyttää käyttäjäpaneelissa, tiedot ORDER tablen sijaan USERS tableen

export const OrderDetails = () => {

	const fields = ['fname', 'lname', 'address', 'postalcode', 'city', 'email', 'phone']
	const [data, setData] = useState({})

	const updateData = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(data)
	}

	return (
		<div>
			<div className="container1 mt-2">
				<form>
					{fields.map((item) => {
						return (
							<div key={item}>
								<label>{`${language[item]}`}</label>
								<input
									type="text"
									name={item}
									onChange={updateData}
								/>
							</div>
						)
					})}
				</form>
				<button className='sendB' type="submit" onClick={e => handleSubmit(e)}>{language.submit}</button>	{/* pitää muuttaa myöhemmin */}
			</div>
		</div>
	);
}
