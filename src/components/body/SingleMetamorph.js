import React, { Component } from 'react';

import './styles/singleMetamorph.css';

class SingleMetamorph extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="metamorphContainer">
          <div className="beforeContainer"></div>
          <div className="afterContainer"></div>
          <div className="morphStats"></div>
          <div className="descriptionContainer"></div>
        </div>
      </>
    );
  }
}
 
export default SingleMetamorph;