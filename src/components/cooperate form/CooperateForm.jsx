import React from 'react';

import { Provider } from 'react-redux';
import formStore from './form store';

import FormHeader from './FormHeader.jsx';
import FormStepsControler from './FormStepsControler.jsx';

import './styles/styles.css'


const CooperateForm = () => {

  return ( 
    <>
      <Provider store={formStore}>

        <div className="form-container">
          <form>
            <FormHeader />
            <FormStepsControler />
          </form>
        </div>

      </Provider>

    </>
   );
}
 
export default CooperateForm;

