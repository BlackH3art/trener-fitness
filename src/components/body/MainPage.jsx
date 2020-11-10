import React from 'react';

// import Offer from './Offer';
import Main from './Main.jsx';
import SectionComponent from './SectionComponent';
import SectionTraining from './SectionTraining';
import SectionAbout from './SectionAbout';
import SectionMetamorph from './SectionMetamorph';



const MainPage = () => {

  return ( 
    <>
      
        {/* <Offer />  */}
        <Main />
        <SectionComponent />
        <SectionTraining />
        <SectionAbout />
        <SectionMetamorph />
      
    </>
    );
}
 
export default MainPage;