import { language } from "../locale/FI"

export const UsernamePassword = () => {
	
	return (
		<div>
			<input id="username" placeholder={language.userName}/><br/>
			<input id="password" type="password" placeholder={language.password} />
		</div>
	)
}