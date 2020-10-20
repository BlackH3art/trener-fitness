import React, { Component } from 'react';

import './styles/iconBox.css';


class IconBox extends Component {
  state = {  }
  render() { 
    return ( 
    <>
        <div className="iconBox">
          <img src={this.props.img} alt=""/>
          <h2>{this.props.title}</h2>
          <p>{this.props.text}</p>
        </div>
    </>
     );
  }
}
 
export default IconBox;