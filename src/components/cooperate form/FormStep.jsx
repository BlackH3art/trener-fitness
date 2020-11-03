import React from 'react';

import FormInputComponent from './FormInputComponent.jsx';

const FormStep = ({ inputs, labels, placeholders}) => {


  const inputComponents = inputs.map((item, index) => <FormInputComponent 
    key={index}
    name={item}
    label={labels[index]}
    placeholder={placeholders[index]}
  />)

  return ( 
    <>
      <div className="form-step-container">
        {inputComponents}
      </div>
    </>
   );
}
 
export default FormStep;