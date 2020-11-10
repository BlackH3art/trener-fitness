import React from 'react';

import { Link } from 'react-router-dom';

import './styles/navmain.css';

const NavMain = () =>  {
  
  return ( 
    <>
      
        <nav className="navMain">
            <ul className="ulMain">
              <Link to="/"><li>strona główna <span className="blue-menu-slider"></span></li></Link>
              <li>o mnie <span className="blue-menu-slider"></span></li>
              <Link to="/metamorfozy"><li>pokemorfozy <span className="blue-menu-slider"></span></li></Link>
              <li>oferta <span className="blue-menu-slider"></span></li>
              <li>blog <span className="blue-menu-slider"></span></li>
              <Link to="/kontakt"><li>kontakt <span className="blue-menu-slider"></span></li></Link>
          </ul>
        </nav>
      
    </>
  );

}
 
export default NavMain;