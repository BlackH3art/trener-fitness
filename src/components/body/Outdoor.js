import React, { Component } from 'react';

class Outdoor extends Component {
  state = {  }



  render() { 
    return ( 
      <>
        <div style={this.props.triangleStyle} className="shape2">
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