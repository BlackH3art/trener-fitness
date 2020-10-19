import React, { Component } from 'react';

import './styles/navmain.css';

class NavMain extends Component {
  
  render() { 
    return ( 
      <>
        <nav className="navMain">
            <ul className="ulMain">
              <li>strona główna <span className="blue-menu-slider"></span></li>
              <li>o mnie <span className="blue-menu-slider"></span></li>
              <li>pokemorfozy <span className="blue-menu-slider"></span></li>
              <li>oferta <span className="blue-menu-slider"></span></li>
              <li>blog <span className="blue-menu-slider"></span></li>
              <li>kontakt <span className="blue-menu-slider"></span></li>
           </ul>
         </nav>
      </>
     );
  }
}
 
export default NavMain;