import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

import facebookLogoFont from '../../img/Facebook-Logo-Font.jpg'
import instagramLogoFont from '../../img/Instagram-Logo-Font.jpg';


import './style/footer.css';

const Footer = () => {
  return ( 
    <>
      <div className="social-buttons-container">
        <div className="social-buttons-box">
          <ul>
            <li className="facebook-link"><a href="https://www.facebook.com/marcin.kubica.735" target="_blank" rel="noreferrer"> <img src={facebookLogoFont} alt="facebook"/> <FontAwesomeIcon icon={faFacebookF} className="facebook-icon"/></a></li>
            <li className="insta-link"><a href="https://www.instagram.com/sniperkmn/?hl=pl" target="_blank" rel="noreferrer">   <FontAwesomeIcon icon={faInstagram} className="instagram-icon"/>< img src={instagramLogoFont}alt="instagram"/></a></li>
          </ul>
        </div>
      </div>
      <footer>

      </footer>
    </>
   );
}
 
export default Footer;