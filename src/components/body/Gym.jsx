/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

class Gym extends Component {
  state = { 
    active: {
      backgroundImage: "#2bff00",
      opacity: "1",
      left: "30px",
      zIndex: "1",
      ...this.props.triangleStyle
    },
   }

  handleClick() {
    //
  }
  render() { 
    return ( 
      <>
        <div style={this.props.chosen ? this.state.active : this.props.triangleStyle} className="shape" onClick={this.props.clicker}>
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