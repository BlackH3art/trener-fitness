/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import logo from '../img/logo2-white-other.png';

// import NavSocial from './NavSocial';
import NavMain from './NavMain';

const Header = () => {

  const headerStyle = {
    position: "fixed",
    backgroundColor:  "rgba(0, 0, 0, 0.5)",
    height: "80px",
    width: "100%",
    boxShadow: "5px 1px 10px rgb(99, 99, 99)",
    zIndex: '2',
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
          {/* <NavSocial /> */}
      </header>
    </>
    );

}
 
export default Header;