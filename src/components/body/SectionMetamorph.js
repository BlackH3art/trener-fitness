import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import SingleMetamorph from './SingleMetamorph';
import { metamorphosesData } from './imagesData'

import './styles/sectionMetamorphSlider.css';

export const SectionMetamorph = () => {

  const [metamorphoses, setMetamorphoses] = useState([])
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [sliderPosition, setSliderPosition] = useState(0)
  const [maxPosition, setMaxPosition] = useState(0)

  useEffect(
    () => {
      setMetamorphoses(metamorphosesData)
      if(windowSize <= 1024) {
        setMaxPosition(500)
      } else {
        setMaxPosition(180)
      }
    }, [windowSize]
  )

  useEffect(() => {

    const handleResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

  }, [])

  const sliderStyleObject = {
    transform: `translateX(-${sliderPosition}vw)`
  }

  const handleNextClick = () => {
    if(windowSize >= 1025) {
      setSliderPosition(prevState => prevState + 90);
      return;
    } else {
      setSliderPosition(prevState => prevState + 100);
      return;
    }
  }
  
  const handlePrevClick = () => {
    if(windowSize >= 1025) {
      setSliderPosition(prevState => prevState - 90);
      return;
    } else {
      setSliderPosition(prevState => prevState - 100);
      return;
    }
  }

  const isFirstElement = sliderPosition === 0 ? true : false;
  const isLastElement = sliderPosition === maxPosition ? true : false;


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