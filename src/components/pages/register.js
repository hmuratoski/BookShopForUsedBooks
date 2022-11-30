
import '../../css/Register.css';
import { UsernamePassword } from '../usernamepassword';
import { OrderDetails } from './orderdetails';

export const Register = (props) => {
	
	return (
		<div className="container1 mt-2">
			<UsernamePassword/>
			<OrderDetails/>
			<button className="btn btn btn-outline-dark">Päivitä tiedot</button>
		</div>
	)
}