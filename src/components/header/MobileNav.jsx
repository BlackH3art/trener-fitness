import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';


const MobileNav = ({ isActive, logo }) => {

  const initialObj = {
    x: '-100%'
  }
  const activeObj = {
    x: '0%'
  }

  return ( 
    <>
      <motion.div className="mobile-menu-container" initial={initialObj} animate={isActive ? activeObj : initialObj}>
        <img src={logo} alt="logo"/>
        <div className="mobile-nav-ul">
          <ul className="mobile-ul">
            Menu
            <NavLink to="/" exact={true} activeClassName="active-li-mobile"> <li>Strona główna</li> </NavLink>
            <NavLink to="/omnie" activeClassName="active-li-mobile"> <li>O mnie</li> </NavLink>
            <NavLink to="/metamorfozy" activeClassName="active-li-mobile"> <li>Metamorfozy</li> </NavLink>
            <NavLink to="/oferta" activeClassName="active-li-mobile"> <li>Oferta</li> </NavLink>
            <NavLink to="/blog" activeClassName="active-li-mobile"> <li>Blog</li> </NavLink>
            <NavLink to="/kontakt" activeClassName="active-li-mobile"> <li>Kontakt</li> </NavLink>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
 
export default MobileNav;