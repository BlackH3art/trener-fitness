import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom'

import facebookLogoFont from '../../img/Facebook-Logo-Font.jpg';
import instagramLogoFont from '../../img/Instagram-Logo-Font.jpg';
import logo from '../img/logo2-white-other.png';

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
        <div className="style-container">
          <div className="footer-detail-container">

              <div className="footer-contact-details">
                <img src={logo} alt="ssssssss"/>
                <p> <FontAwesomeIcon icon={faMobileAlt} className="footer-icon footer-mobile"/>  507 736 664 </p>
                <p> <FontAwesomeIcon icon={faAt} className="footer-icon footer-mail"/>  marcin.kubica@gmail.com </p>
                <div className="social-container">
                  <a href="https://www.facebook.com/marcin.kubica.735" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} className="footer-face footer-icon" /> </a>
                  <a href="https://www.instagram.com/sniperkmn/?hl=pl" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="footer-insta footer-icon" /> </a>
                </div>
              </div>

              <div className="footer-navigation">
                <nav className="footer-nav">
                  <h4>Nawigacja</h4>
                  <ul className="footer-nav-ul">
                    <NavLink to="/" activeClassName="nav-li-active" exact={true} ><li>Strona główna </li></NavLink>
                    <NavLink to="/omnie" activeClassName="nav-li-active"><li>O mnie </li></NavLink>
                    <NavLink to="/metamorfozy" activeClassName="nav-li-active" ><li>Pokemorfozy </li></NavLink>
                    <NavLink to="/oferta" activeClassName="nav-li-active"><li>Oferta </li></NavLink>
                    <NavLink to="/blog" activeClassName="nav-li-active"><li >Blog </li></NavLink>
                    <NavLink to="/kontakt" activeClassName="nav-li-active" ><li>Kontakt </li></NavLink>
                  </ul>
                </nav>
              </div>

              <div className="copyright-container">
                <p> &copy; 2020 Marcin Kubica Trener Personalny - <a href="none">Polityka prywatności</a> &nbsp; | &nbsp; <a href="none">Regulamin</a> </p>
              </div>

          </div>
        </div>
      </footer>
    </>
   );
}
 
export default Footer;