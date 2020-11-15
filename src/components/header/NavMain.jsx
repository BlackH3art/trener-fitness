import React from 'react';

import { NavLink } from 'react-router-dom';

import './styles/navmain.css';

const NavMain = () =>  {
  
  return ( 
    <>
      
        <nav className="navMain">
            <ul className="ulMain">
              <NavLink to="/" activeClassName="active-navmain-element" exact={true}><li>strona główna <span className="blue-menu-slider"></span></li></NavLink>
              <NavLink to="/omnie" activeClassName="active-navmain-element"><li>o mnie <span className="blue-menu-slider"></span></li></NavLink>
              <NavLink to="/metamorfozy" activeClassName="active-navmain-element"><li>metamorfozy <span className="blue-menu-slider"></span></li></NavLink>
              <NavLink to="/oferta" activeClassName="active-navmain-element"><li>oferta <span className="blue-menu-slider"></span></li></NavLink>
              <NavLink to="/blog" activeClassName="active-navmain-element"><li>blog <span className="blue-menu-slider"></span></li></NavLink>
              <NavLink to="/kontakt" activeClassName="active-navmain-element"><li>kontakt <span className="blue-menu-slider"></span></li></NavLink>
          </ul>
        </nav>
      
    </>
  );

}
 
export default NavMain;