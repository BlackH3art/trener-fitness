import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './styles/mainpage.css'

class MainPage extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
        <div className="main">
          <div className="mainContainer">
            <h1>trenujmy <br/> razem !</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus mollis nulla maximus mollis maximus. 
              Quisque sit amet urna sit amet.
            </p>
            <button>zostań podopiecznym <FontAwesomeIcon icon={faAngleDoubleRight} /> </button>
          </div>
        </div>
      </>
     );
  }
}
 
export default MainPage;