import React from 'react';

import { NavLink } from 'react-router-dom';

import './styles/navmain.css';

const NavMain = () =>  {
  
  return ( 
    <>
      
        <nav className="navMain">
            <ul className="ulMain">
              <NavLink to="/" activeClassName="active-navmain-element" exact={true}><li>strona główna <span className="blue-menu-slider"></span></li></NavLink>
              <li>o mnie <span className="blue-menu-slider"></span></li>
              <NavLink to="/metamorfozy" activeClassName="active-navmain-element"><li>metamorfozy <span className="blue-menu-slider"></span></li></NavLink>
              <li>oferta <span className="blue-menu-slider"></span></li>
              <li>blog <span className="blue-menu-slider"></span></li>
              <NavLink to="/kontakt" activeClassName="active-navmain-element"><li>kontakt <span className="blue-menu-slider"></span></li></NavLink>
          </ul>
        </nav>
      
    </>
  );

}
 
export default NavMain;