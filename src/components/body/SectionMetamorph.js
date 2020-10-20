import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SingleMetamorph from './SingleMetamorph';
import { metamorphosesData } from './imagesData'

import './styles/sectionMetamorphSlider.css';

export const SectionMetamorph = () => {

  const [metamorphoses, setMetamorphoses] = useState([])
  const [sliderPosition, setSliderPosition] = useState(0)

  useEffect(
    () => {
      setMetamorphoses(metamorphosesData)
    }, []
  )

  const sliderStyleObject = {
    transform: `translateX(-${sliderPosition}px)`
  }

  const handleNextClick = () => {
    setSliderPosition(prevState => prevState + 1360)
  }
  
  const handlePrevClick = () => {
    setSliderPosition(prevState => prevState - 1360)
  }

  const isFirstElement = sliderPosition === 0 ? true : false;
  const isLastElement = sliderPosition === 2720 ? true : false;


  const metamorphosesComponents = metamorphoses.map((item, index) => (
    <SingleMetamorph 
      key={index}
      before={item.before}
      after={item.after}
      name={item.name}
      timePeriod={item.timePeriod}
      weight={item.weight}
      training={item.training}
      description={item.description}
    />
  ))


  return ( 
    <>
      <div className="headingContainer">
        <h1>Metamorfoy podopiecznych</h1>
        <div className="button-blur-container">
          <button onClick={handlePrevClick} className="slider-buttons" disabled={isFirstElement}><FontAwesomeIcon size="3x" icon={faChevronLeft}/></button>
          <button onClick={handleNextClick} className="slider-buttons" disabled={isLastElement}><FontAwesomeIcon size="3x" icon={faChevronRight}/></button>
        </div>
        <div className="metamorph-slider-container" >
          <div className="metamorph-slider" style={sliderStyleObject}>
            {metamorphosesComponents}
          </div>
          
        </div>
     
      </div>
    </>
  );

}
 
export default SectionMetamorph;