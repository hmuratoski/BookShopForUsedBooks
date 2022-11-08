import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Category.css'

//tuotelistauksen haku ja filtterit
	//tarvitaan täältä tiedot takaisin content.js tiedostoon, jotta voidaan laittaa se argumentiksi
	//phplle SQL kyselyä varten. (ks. login.js:16 )

export const Category = () => {

	const categories = ["Matematiikka", "Fysiikka", "Kemia"];   //from database     (ks. content.js)

	return (
		<div className="filterOuter mt-5">
			<div className="filterPadding" />
				<div className="filterWrapper ">
					<div className="searchFieldWrapper">
						<input id="searchField" defaultValue="Haku" />
					</div>
					<div id="tagFilter">
						{categories.map((item, index) => (          //luo elementit jokaiselle kategorialle
							<div key={index} className="checkboxFilter">
								<div className="checkboxWrapper">
									<input type="checkbox"></input>
								</div>
								<div className="checkboxTextWrapper">
									<h5>{item}</h5>
								</div>
							</div>
						))}
					</div>
				</div>
			<div className="filterPadding" />
		</div>
	);
}
