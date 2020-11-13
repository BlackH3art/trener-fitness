import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import formData from './components/cooperate form/store';


import MainPage from './components/body/MainPage.jsx';
import ContactPage from './components/contact/ContactPage.jsx';
import Footer from './components/footer/Footer.jsx'
import Header from './components/header/Header';
import MetamorphsPage from './components/metamorphs/MetamorphsPage.jsx';



const App = () => {
  

  return ( 
    <>
      <Provider store={formData}>
        <Router>

          <Header />

          <div className="wholeBodyContainer">

            <Route path="/" component={MainPage} exact={true} />
            <Route path="/metamorfozy" render={MetamorphsPage} exact={true} />
            <Route path="/kontakt" component={ContactPage} exact={true}/>

          </div>

          <Footer />

        </Router>
      </Provider>
    </>
    );

}
 


ReactDOM.render(<App />, document.getElementById("root"));
