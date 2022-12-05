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
	<h1>ADMINPANEL</h1>
}
