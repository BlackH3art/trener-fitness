import React from 'react';

const FormInputComponent = ({name, label, placeholder}) => {


  return ( 
    <>
      <div className="input-container">
        <label htmlFor={name}>
          {label}
        </label>
        <input name={name} type="text" placeholder={placeholder}/>
      </div>
    </>
   );
}
 
export default FormInputComponent;