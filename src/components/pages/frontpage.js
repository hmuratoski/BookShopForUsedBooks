import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/Frontpage.css';

//Kaupan etusivu. tietoja sitä tätä tuota, ehkä jotakin kuvaa

export const FrontPage = () => {
	return (
<div className="container-fluid">
  <div className="container-xl">
    
  <h1 className='otsikko'>Tervetuloa Kirijoja verkkokauppaan!</h1>
  </div>
  <p className='yleisteksti'>Täältä löydät erilliaisia käytettyjä oppikirjoja.
     Pääset hakemaan kirjat hakukenttän avulla, kategorian sekä kirjan nimeella. Ja tiettysti, HALAVALLA!</p>
     <p className='tracking-out-expand-fwd '>Kirijoja kaikille, HALAVALLA!</p>

</div>



	);
}
