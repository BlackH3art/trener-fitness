/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MobileNav from './MobileNav.jsx';
import NavMain from './NavMain.jsx';

import './styles/header.css';
import logo from '../img/logo2-white-other.png';


const Header = () => {


  const headerImgStyle = {
    display: "block",
    height: "90%",
    paddingTop: "5px"
  }


  const [activeMobileNav, setActiveMobileNav] = useState(false)
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

  }, [windowSize])

  const handleClick = () => {
    setActiveMobileNav(!activeMobileNav)
  }

  const navMain = windowSize >= 1200 ? <NavMain /> : null

  return ( 
    <>
      {/* <header className="header-navigation" style={headerStyle}> */}
      <header className="header-navigation" >
          <img style={headerImgStyle} src={logo} alt="ssssssss"/>
          {navMain}
        <div className="mobile-nav-container">
          <button onClick={handleClick}> <FontAwesomeIcon icon={activeMobileNav ? faArrowLeft : faBars} /> </button> 
        </div>

        <MobileNav isActive={activeMobileNav} logo={logo}/>

      </header>
    </>
    );

}
 
export default Header;