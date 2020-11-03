import React from 'react';
import ReactDOM from 'react-dom';

import Body from './components/body/Body';
import CooperateForm from './components/cooperate form/CooperateForm.jsx'
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header';



const App = () => {
  

  return ( 
    <>
      <Header />
      <Body />
      <CooperateForm />
      <Footer />
    </>
    );

}
 


ReactDOM.render(<App />, document.getElementById("root"));
