/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import logo from '../img/logo2-white-other.png';

import NavSocial from './NavSocial';
import NavMain from './NavMain';

class Header extends Component {
  state = {
    

  }

  

  render() { 

    const headerStyle = {
      position: "fixed",
      backgroundColor:  "rgba(0, 0, 0, 0.5)",
      height: "80px",
      width: "100%",
      boxShadow: "5px 1px 10px rgb(99, 99, 99)",
      zIndex: '1',
    }
    const headerImgStyle = {
      display: "block",
      height: "90%",
      paddingTop: "5px"
    }



    return ( 
      <>
        <header style={headerStyle}>
            <img style={headerImgStyle} src={logo} alt="ssssssss"/>
            <NavMain />
            <NavSocial />
        </header>
      </>
     );
  }
}
 
export default Header;