import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormStep from './FormStep.jsx';

import { updateFormData } from './form store/actionCreators';


const FormStepsControler = () => {

  const dispatch = useDispatch();

  const formStepInputs = useSelector(state => state.formShape.inputs);
  // const initialFormData = useSelector(state => state.formData);



  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    height: '',
    weight: '',
    phone: '',
    date: ''
  })


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateFormData(formData))

  }


  const formSteps = formStepInputs.map((item, index) => <FormStep 
    key={index}
    changeCallback={handleChange}
    inputs={item.names}
    labels={item.labels}
    placeholders={item.placeholders}
  />)

  return ( 
    <>
      <div className="form-steps-controler">
        {formSteps}
      </div>
      <button onClick={handleClick}>wyślij do reduxa?</button>
    </>
   );
}
 
export default FormStepsControler;