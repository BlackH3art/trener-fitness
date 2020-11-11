import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faWeight, faDumbbell } from '@fortawesome/free-solid-svg-icons';



const MetamorphPageComponent = (props) =>  {

  const { before, after, name, timePeriod, weight, training, description} = props

  return ( 
    <>
      <div className="metamorph-page-component">
        <div className="before-bg" style={{ backgroundImage: `url(${before})` }}> <div className="before-sign"> <h2>PRZED</h2></div> </div>
        <div className="after-bg" style={{ backgroundImage: `url(${after})` }}> <div className="after-sign"> <h2>PO</h2></div> </div>
        
        <div className="metamorph-name-container">
          <h2 className="metamorph-name"> {name} </h2>
        </div>

        <div className="icons-stats-container">
          <div className="icons-stats">
            <FontAwesomeIcon icon={faClock} className="single-staticon"/> 
            <h2 className="icon-stat-title">
              {timePeriod} <span>msc</span>
            </h2>
          </div>
          <div className="icons-stats">
            <FontAwesomeIcon icon={faWeight} className="single-staticon"/> 
            <h2 className="icon-stat-title">
              {weight} kg
            </h2>
          </div>
          <div className="icons-stats">
            <FontAwesomeIcon icon={faDumbbell} className="single-staticon"/> 
            <div>
              <span className="training-type-span"> RODZAJ TRENINGU:</span>
              <h2 className="icon-stat-title">
                {training.toUpperCase()}
              </h2>
            </div>
          </div>
        </div>

        <div className="descriptionContainer grey-description">
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
 
export default MetamorphPageComponent;