import { language } from "../locale/FI";
import { Condition } from './condition';
import { NavLink } from 'react-router-dom';

export const ShoppingCartItem = (props) => {
	
	return (
		<tr>
			<td>{props.bookId}</td>
			<td><NavLink to={`/product?${props.bookId}`}>{props.name}</NavLink></td>
			<td><Condition condition={props.condition}/></td>
			<td>{props.price}€</td>
			<td><button onClick={event => props.removeItem(props.bookId)}>X</button></td>
		</tr>
	)
}