import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'


class NavSocial extends Component {

  state = {
 
  }

  
  
  render() { 
    const navSocialStyle = {
      position: "absolute",
      display: "block",
      right: "30px",
      top: "30%",
      transform: "translateY(-50%)",
      width: "100px",
      // borderBottom: "1px solid white"
    };
    const ulSocialStyle = {
      display: "flex",
      justifyContent: "space-between",
      listStyle: "none",
      color: "#d9d9d9",
      fontSize: "18px",
      width: "100%",
      paddingBottom: "5px"
    };


    return ( 
      <>
        <nav className="navSocial" style={navSocialStyle}>
          <ul className="ulSocial" style={ulSocialStyle}>
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