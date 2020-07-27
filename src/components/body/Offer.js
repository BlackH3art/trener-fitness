import React, { Component } from 'react';

import Gym from './Gym';
import Outdoor from './Outdoor';
import GymPresentation from './presentation/GymPresentation';
import OutdoorPresentation from './presentation/OutdoorPresentation';

class Offer extends Component {
  state = { 
    triangleStyle: { 
      display: "flex",
      alignContent: "center",
      position: "absolute",
      top: "0",
      height: "100%",
      width: "60%",
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
    },
    gymActive: false,
    outdoorActive: false,
   }

  gymClicked() {
    if (!this.state.gymActive) {
      this.setState({
        gymActive: true,
        outdoorActive: false
      })
    }
  }
  outdoorClicked() {
    if (!this.state.outdoorActive) {
      this.setState({
        gymActive: false,
        outdoorActive: true
      })
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
              chosen={this.state.gymActive}
              clicker={this.gymClicked.bind(this)}
            />
            <Outdoor 
              triangleStyle={this.state.triangleStyle}
              container={this.state.hpContainer}
              chosen={this.state.outdoorActive}
              clicker={this.outdoorClicked.bind(this)}

            />
          </div>
        </section>
        {this.state.gymActive ? <GymPresentation /> : ""}
        {this.state.outdoorActive ? <OutdoorPresentation /> : ""}
      </>
     );
  }
}
 
export default Offer;