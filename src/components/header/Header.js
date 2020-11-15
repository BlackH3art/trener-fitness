/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MobileNav from './MobileNav.jsx';
import NavMain from './NavMain.jsx';

import './styles/header.css';
import logo from '../img/logo2-white-other.png';


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

  const [activeMobileNav, setActiveMobileNav] = useState(false)


const handleClick = () => {
  setActiveMobileNav(!activeMobileNav)
}

  return ( 
    <>
      <header className="header-navigation" style={headerStyle}>
          <img style={headerImgStyle} src={logo} alt="ssssssss"/>
          <NavMain />
        <div className="mobile-nav-container">
          <button onClick={handleClick}> <FontAwesomeIcon icon={activeMobileNav ? faArrowLeft : faBars} /> </button> 
        </div>

        <MobileNav isActive={activeMobileNav} logo={logo}/>

      </header>
    </>
    );

}
 
export default Header;