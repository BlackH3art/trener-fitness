import React from 'react';

import MetamorphPageComponent from './MetamorphPageComponent.jsx';

import './styles/metamorphspage.css';
import { metamorphosesPageData } from '../body/imagesData';

const MetamorphsPage = () => {

  const metamorphosesComponents = metamorphosesPageData.map((item, index) => (
    <MetamorphPageComponent 
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
      <div className="metamorphspage-container">
        <div className="page-title-container">
          <h1 className="action-call">metamorfozy podopiecznych</h1>
        </div>
        <div className="metamorphs-components-container">
          {metamorphosesComponents}
        </div>
      </div>
    </>
  );
}
 
export default MetamorphsPage;