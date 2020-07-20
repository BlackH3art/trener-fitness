/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

class Gym extends Component {
  state = {  }

  handleClick() {
    // console.log('click');
  }
  render() { 
    return ( 
      <>
        <div style={this.props.triangleStyle} className="shape" onClick={this.handleClick}>
          <div style={this.props.container}>
            <h1>Gym</h1>
            <p>Trening na siłowni </p>
          </div>
        </div>
      </>
     );
  }
}
 
export default Gym;