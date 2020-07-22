/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';

class Outdoor extends Component {
  state = { 
    active: {
      backgroundImage: "#00c8ff",
      opacity: "1",
      right: "30px",
      zIndex: "1",
      ...this.props.triangleStyle
    }
   }



  render() { 
    return ( 
      <>
        <div style={this.props.chosen ? this.state.active : this.props.triangleStyle} className="shape2" onClick={this.props.clicker}>
          <div style={this.props.container}>
            <h1>Outdoor</h1>
            <p>Trening w plenerze</p>
          </div>
        </div>  
      </>
     );
  }
}
 
export default Outdoor;