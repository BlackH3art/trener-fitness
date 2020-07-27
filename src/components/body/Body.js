import React, { Component } from 'react';

// import Offer from './Offer';
import MainPage from './MainPage';
import SectionComponent from './SectionComponent';



class Body extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="wholeBodyContainer">
          <MainPage />
          <SectionComponent />
        </div>

        {/* <Offer />  */}
      </>
     );
  }
}
 
export default Body;