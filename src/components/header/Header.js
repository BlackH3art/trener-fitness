/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

import logoTextWhite from '../img/logo-text-white.png';
import logo from '../img/logo.png';

import NavSocial from './NavSocial';

class Header extends Component {
  state = {
    headerActive: false,

  }

  handleHeaderClick() {
    this.setState({
      headerActive: !this.state.headerActive
    })
  }

  render() { 

    const headerStyle = { 
      position: "absolute",
      backgroundColor: "#000",
      height: "70px",
      width: "100%",
      zIndex: "12",
      boxShadow: "5px 1px 10px rgb(99, 99, 99)",
      transition: ".5s"
    }
    const headerStyleActive = {
      position: "absolute",
      backgroundColor: "rgb(192, 192, 192)",
      height: "50px",
      width: "100%",
      zIndex: "12",
      boxShadow: "5px 1px 10px rgb(99, 99, 99)",
      transition: ".5s"
    }
    const headerImgStyle = { 
      display: "block",
      position: "absolute",
      height: "120%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
    const headerImgStyleActive = { 
      display: "block",
      position: "absolute",
      height: "120%",
      top: "50%",
      left: "10%",
      transform: "translate(-50%, -50%)"
    }

    return ( 
      <>
        <header onClick={this.handleHeaderClick.bind(this)} style={this.state.headerActive ? headerStyleActive : headerStyle}>
            <img style={this.state.headerActive ? headerImgStyleActive : headerImgStyle} src={this.state.headerActive ? logoTextWhite : logo} alt=""/>
            <NavSocial />
        </header>
      </>
     );
  }
}
 
export default Header;