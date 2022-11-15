import React from 'react';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Condition = (props) => {

	return (
		<svg height="30" width="26">
			{props.condition == 1 ? <circle cx="15" cy="15" r="9" stroke="black" strokeWidth="3" fill='red' /> : null }
			{props.condition == 2 ? <circle cx="15" cy="15" r="9" stroke="black" strokeWidth="3" fill='yellow' /> : null }
			{props.condition == 3 ? <circle cx="15" cy="15" r="9" stroke="black" strokeWidth="3" fill='green' /> : null }
		</svg>
	);
}
