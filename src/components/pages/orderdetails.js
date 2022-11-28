import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Orderdetails.css';
import { useState } from 'react';

//ostoskorin jälkeinen formi asiakkaan maksu- ja toimitustietoja varten
//voidaan uudelleenkäyttää käyttäjäpaneelissa, tiedot ORDER tablen sijaan USERS tableen

export const OrderDetails = (props) => {

	const [inputs, setInputs] = useState({});

	const handleChange = (event) => {
		const fname = event.target.fname;
		const lname = event.target.lname;
		const address = event.target.address;
		const postalcode = event.target.postalcode;
		const city = event.target.city;
		const email = event.target.email;
		const phone = event.target.phone;

		setInputs(values => ({ ...values, [fname]: values }))
		setInputs(values => ({ ...values, [lname]: values }))
		setInputs(values => ({ ...values, [address]: values }))
		setInputs(values => ({ ...values, [postalcode]: values }))
		setInputs(values => ({ ...values, [city]: values }))
		setInputs(values => ({ ...values, [email]: values }))
		setInputs(values => ({ ...values, [phone]: values}))

	}

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(inputs);
	}


	return (


		<div>
			<div class="flex-container">
			<form onSubmit={handleSubmit}>
			<div>
				<label>First name:
					<input
						type="text"
						name="fname"
						value={inputs.fname || ""}
						onChange={handleChange}
					/>
				</label>
				<label>Last name:
					<input
						type="text"
						name="lname"
						value={inputs.lname || ""}
						onChange={handleChange}
					/>
				</label>
				<label>Address:
					<input
						type="text"
						name="address"
						value={inputs.address || ""}
						onChange={handleChange}
					/>
				</label>
				<label>Postla code:
					<input
						type="text"
						name="postalcode"
						value={inputs.postalcode || ""}
						onChange={handleChange}
					/>
				</label>
				</div>
				<label>City:
					<input
						type="text"
						name="city"
						value={inputs.city || ""}
						onChange={handleChange}
					/>
				</label>
				<label>Email:
					<input
						type="text"
						name="email"
						value={inputs.email || ""}
						onChange={handleChange}
					/>
				</label>
				<label>Phone:
					<input
						type="text"
						name="phone"
						value={inputs.phone || ""}
						onChange={handleChange}
					/>
				</label>
				
				<input type="submit" />
			</form>
			</div>
		</div>
	);
}
