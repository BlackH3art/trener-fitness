// import React, { useState, useEffect }  from 'react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faWeight, faDumbbell } from '@fortawesome/free-solid-svg-icons'


import './styles/singleMetamorph.css';

const SingleMetamorph = (props) =>  {

  const { before, after, name, timePeriod, weight, training, description} = props

  return ( 
    <>
      <div className="metamorphContainer">
        <div className="beforeContainer" style={{ backgroundImage: `url(${before})` }}></div>
        <div className="afterContainer" style={{ backgroundImage: `url(${after})` }}> </div>
        
        <div className="morphStats">
          <h1> {name} </h1>
          <div>
            <h2>
              <FontAwesomeIcon icon={faClock}/> {timePeriod} msc
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faWeight}/> {weight} kg
            </h2>
          </div>
          <div>
            <h2>
              <FontAwesomeIcon icon={faDumbbell}/> {training}
            </h2>
          </div>
        </div>
        <div className="descriptionContainer">
          <div>
            <span> OPIS </span> <span> WSPÓŁPRACY </span>
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