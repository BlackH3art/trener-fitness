import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'



class NavSocial extends Component {

  state = {
 
  }

  
  
  render() { 


    return ( 
      <>
        <nav className="navSocial">
          <ul className="ulSocial">
            <li><a href="https://www.facebook.com/marcin.kubica.735" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
            <li><a href="https://twitter.com/maybeNoT_or_NoT" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="https://www.instagram.com/sniperkmn/?hl=pl" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
          </ul>
        </nav>
      </>
     );
  }
}
 
export default NavSocial;