import React, { useEffect, useState } from 'react';

import SingleMetamorph from './SingleMetamorph';
import { metamorphosesData } from './imagesData'


export const SectionMetamorph = () => {

  const [metamorphoses, setMetamorphoses] = useState([])

  useEffect(
    () => {
      setMetamorphoses(metamorphosesData)
    }, []
  )

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
        {metamorphosesComponents}
      </div>
    </>
  );

}
 
export default SectionMetamorph;