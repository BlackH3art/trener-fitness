import React, { Component } from 'react';

import Gym from './Gym';
import Outdoor from './Outdoor';

class Offer extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <section className="offer">
         <div className="contentshape">
            <Gym />
            <Outdoor />
          </div>
        </section>
      </>
     );
  }
}
 
export default Offer;