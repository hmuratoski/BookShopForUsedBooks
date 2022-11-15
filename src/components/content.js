import React from 'react';
import { Shop } from './pages/shop';
import { About } from './pages/about';
import { Frontpage } from './pages/frontpage';
import { ProductPage } from './pages/productpage';
import '../css/Header.css';

//Headerin ja footerin välinen sisältö, tänne routingit

export const Content = (props) => {
	switch (props.page[0]) {                //yksittäisten sivujen testaukseen ennen routingia
		case "Home":
			return (
				<Frontpage />
			);
			
		case "ProductPage":
			return (
				<ProductPage 
					productName="name"
					productImage={require("../images/product/1.png")}
					productAuthor="author author"
					productYear="1234"
					productDesc="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
					productPrice="25"
					productCondition="2"
					loggedIn={props.loggedIn}
				/>
			);

		case "About":
			return (
				<About />
			);

		case "Shop":
			return (
				<Shop loggedIn={props.loggedIn} />
			);

	}
}
