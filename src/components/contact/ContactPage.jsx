import React, { useState } from 'react';

import ContactForm from '../cooperate form/ContactForm.jsx';
import CooperateForm from '../cooperate form/CooperateForm.jsx';

import './styles/contact.css';

const ContactPage = () => {

  const [ cooperateActive, setCooperateActive ] = useState(false);
  const [ contactFormActive, setContactFormActive ] = useState(true);

  const handleActiveContactForm = () => {
    setContactFormActive(true);
    setCooperateActive(false)
  }
  const handleActiveCooperateForm = () => {
    setCooperateActive(true);
    setContactFormActive(false);
  }

  const handleKeyPress = () => {

  }

  const reverse = cooperateActive ? "-reverse" : "";

  const activeForm = cooperateActive && !contactFormActive? <CooperateForm /> : <ContactForm />;

  return ( 
    <>
      <div className="contactpage-container">
        <div className="page-title-container">
          <h1 className="action-call">kontakt</h1>
        </div>
        
        <div className="forms-controler-container">
          <div className="controling-buttons-container">
            <div className={`first-option-div${reverse}`} tabIndex={0} onKeyPress={handleKeyPress} onClick={handleActiveCooperateForm} role="button"> <h3 className="form-title">zostań podopiecnym</h3></div>
            <div className={`second-option-div${reverse}`} tabIndex={0} onKeyPress={handleKeyPress} onClick={handleActiveContactForm} role="button"> <h3 className="form-title">skontaktuj się ze mną</h3></div>
          </div>

          <div className="form-slider-container">
            {activeForm}
          </div>

        </div>
      </div>
    </>
   );
}
 
export default ContactPage;