import React, { Component } from 'react';

import Gym from './Gym';
import Outdoor from './Outdoor';

class Offer extends Component {
  state = { 
    triangleStyle: { 
      display: "flex",
      alignContent: "center",
      position: "absolute",
      top: "0",
      height: "100%",
      width: "60%",
      zIndex: "0",
      transition: ".2s"
    },
    hpContainer: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      transition: ".4s",
      width: "100%",
      cursor: "pointer"
    }
   }

  
  render() { 



    return ( 
      <>
        <section className="offer">
         <div className="contentshape">
            <Gym 
              triangleStyle={this.state.triangleStyle}
              container={this.state.hpContainer}
            />
            <Outdoor 
              triangleStyle={this.state.triangleStyle}
              container={this.state.hpContainer}
            />
          </div>
        </section>
      </>
     );
  }
}
 
export default Offer;