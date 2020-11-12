import React from 'react';

import { Provider } from 'react-redux';
import formStore from './store';

import './styles/contactForm.css';

const ContactForm = () => {

  const handleChange = () => {}

  return ( 
    <>
      <Provider store={formStore}>
        <div className="App-header">

          <div className="form-container">
            <form>

              <div className="contactform-inputs-container">
                <div className="input-container">
                  <label htmlFor="name">
                    imię
                  </label>
                  <input className="form-input" name="name" type="text" placeholder='imię' onChange={handleChange}/>
                </div>
                <div className="input-container">
                  <label htmlFor="email">
                    email
                  </label>
                  <input className="form-input" name="email" type="text" placeholder='email' onChange={handleChange}/>
                </div>
              </div>

              <div className="contactform-textarea-container">
                <label htmlFor="text">
                  tekst
                </label>
                <textarea className="form-input" name="text" placeholder='treść wiadomości...' rows="4" onChange={handleChange}>
                    
                </textarea>
              </div>

            </form>
          </div>
          
        </div>
      </Provider>
    </>
   );
}
 
export default ContactForm;