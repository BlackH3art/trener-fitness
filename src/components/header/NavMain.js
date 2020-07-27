import React, { Component } from 'react';

import './styles/navmain.css';

class NavMain extends Component {
  
  render() { 
    return ( 
      <>
        <nav className="navMain">
            <ul className="ulMain">
              <li>strona główna <span></span></li>
              <li>o mnie <span></span></li>
              <li>pokemorfozy <span></span></li>
              <li>oferta <span></span></li>
              <li>blog <span></span></li>
              <li>kontakt <span></span></li>
           </ul>
         </nav>
      </>
     );
  }
}
 
export default NavMain;