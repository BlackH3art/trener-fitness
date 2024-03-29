import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { cooperateLead } from '../cooperate form/store/actionCreators';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';

import './styles/mainpage.css';
import 'bootstrap/dist/css/bootstrap.css';


const Main = () => {

  const dispatch = useDispatch();
  
  const handleLeadClick = () => {
    dispatch(cooperateLead(true))
  }


  return ( 
    <>
      <div className="main">
        <div className="mainContainer">   
          <h2 className="title-trener"> TRENER PERSONALNY</h2>
          <h1 className="title-name"> MARCIN KUBICA </h1>
          <span className="title-text">Zdrowie i zgrabna sylwetka są tuż za rogiem</span>
  
        </div>
        <div className="action-container">
          <h2 className="action-call">Umów się ze mną!</h2>
          <span className="action-call-text">Pierwsza konsultacja i trening personalny za darmo!</span>
          <Link to="/kontakt"><button onClick={handleLeadClick} className="btn btn-primary p-2 button-action">zostań podopiecznym <FontAwesomeIcon icon={faAngleDoubleRight} /> </button></Link>
        </div>
      </div>
    </>
    );

}
 
export default Main;