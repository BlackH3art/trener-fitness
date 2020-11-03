import React from 'react';
import { useSelector } from 'react-redux';

import FormStep from './FormStep.jsx';


const FormStepsControler = () => {


  const formStepInputs = useSelector(state => state.formShape.inputs);

  const formSteps = formStepInputs.map((item, index) => <FormStep 
    key={index}
    inputs={item.names}
    labels={item.labels}
    placeholders={item.placeholders}
  />)

  return ( 
    <>
      <div className="form-steps-controler">
        {formSteps}
      </div>
    </>
   );
}
 
export default FormStepsControler;