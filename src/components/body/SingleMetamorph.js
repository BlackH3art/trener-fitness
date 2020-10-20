// import React, { useState, useEffect }  from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWeight, faDumbbell } from '@fortawesome/free-solid-svg-icons';


import './styles/singleMetamorph.css';

const SingleMetamorph = (props) =>  {

  const { before, after, name, timePeriod, weight, training, description} = props

  return ( 
    <>
      <div className="metamorphContainer">
        <div className="beforeContainer" style={{ backgroundImage: `url(${before})` }}> <div className="before-sign"> <h2>PRZED</h2></div> </div>
        <div className="afterContainer" style={{ backgroundImage: `url(${after})` }}> <div className="after-sign"> <h2>PO</h2></div> </div>
        
        <div className="morphStats">
          <h2 className="metamorph-name"> {name} </h2>
          <div className="metamorph-singlestat-container">
            <FontAwesomeIcon icon={faClock} className="metamorph-staticon"/> 
            <h2 className="metamorph-stat">
              {timePeriod} <span>msc</span>
            </h2>
          </div>
          <div className="metamorph-singlestat-container">
            <FontAwesomeIcon icon={faWeight} className="metamorph-staticon"/> 
            <h2 className="metamorph-stat">
              {weight} kg
            </h2>
          </div>
          <div className="metamorph-singlestat-container">
            <FontAwesomeIcon icon={faDumbbell} className="metamorph-staticon"/> 
            <div>
              <span className="metamorph-trening-stat"> RODZAJ TRENINGU:</span>
              <h2 className="metamorph-stat">
                {training.toUpperCase()}
              </h2>
            </div>

          </div>
        </div>
        <div className="descriptionContainer">
          <div>
            <h2><span className="metamorph-description1"> OPIS </span> <span className="metamorph-description2"> WSPÓŁPRACY </span></h2>
            <p>
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );

}
 
export default SingleMetamorph;