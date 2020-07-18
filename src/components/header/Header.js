import React, { Component } from 'react';

import logoTextWhite from '../img/logo-white.png';
import logo from '../img/logo.png';

import NavSocial from './NavSocial';

class Header extends Component {
  state = {
    active: false
  }
  render() { 
    return ( 
      <>
        <header>
          <div className="headcontainer">
            <img src={this.state.active ? logoTextWhite : logo} alt=""/>
            <NavSocial />
          </div>
        </header>
      </>
     );
  }
}
 
export default Header;