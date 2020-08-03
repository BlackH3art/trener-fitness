import React, { Component } from 'react';

// import Offer from './Offer';
import MainPage from './MainPage';
import SectionComponent from './SectionComponent';
import SectionTraining from './SectionTraining'



class Body extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="wholeBodyContainer">
          <MainPage />
          <SectionComponent />
          <SectionTraining />
        </div>

        {/* <Offer />  */}
      </>
     );
  }
}
 
export default Body;