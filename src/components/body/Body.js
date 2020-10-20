import React, { Component } from 'react';

// import Offer from './Offer';
import MainPage from './MainPage';
import SectionComponent from './SectionComponent';
import SectionTraining from './SectionTraining';
import SectionAbout from './SectionAbout';
import SectionMetamorph from './SectionMetamorph';



class Body extends Component {
  state = {  }
  render() { 
    return ( 
      <>
        <div className="wholeBodyContainer">
          {/* <Offer />  */}
          <MainPage />
          <SectionComponent />
          <SectionTraining />
          <SectionAbout />
          <SectionMetamorph />
        </div>

      </>
     );
  }
}
 
export default Body;