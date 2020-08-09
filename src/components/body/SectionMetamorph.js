import React, { Component } from 'react';

import SingleMetamorph from './SingleMetamorph';


class SectionMetamorph extends Component {
  state = {  }

  render() { 
    
    return ( 
      <>
        <div className="headingContainer">
          <h1>Metamorfoy podopiecznych</h1>
          <SingleMetamorph />
        </div>
      </>
    );
  }
}
 
export default SectionMetamorph;