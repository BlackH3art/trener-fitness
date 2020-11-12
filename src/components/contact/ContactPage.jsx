import React, { useState } from 'react';

import ContactForm from '../cooperate form/ContactForm.jsx';
import CooperateForm from '../cooperate form/CooperateForm.jsx';

import './styles/contact.css';

const ContactPage = () => {

  const [ cooperateActive, setCooperateActive ] = useState(false);
  const [ contactActive, setContactActive ] = useState(true);



  const cooperateForm = cooperateActive ? <CooperateForm /> : null;
  const contactForm = contactActive ? <ContactForm /> : null;

  return ( 
    <>
      <div className="contactpage-container">
        <div className="page-title-container">
          <h1 className="action-call">kontakt</h1>
        </div>
        
        <div className="forms-controler-container">
          <div className="controling-buttons-container">
            <div className="first-option-div"  > <h3 className="form-title">zostań podopiecznym</h3></div>
            <div className="second-option-div"  > <h3 className="form-title">skontaktuj się</h3></div>
          </div>

          <div className="form-slider-container">
            {cooperateForm}
            {contactForm}
          </div>

        </div>
      </div>
    </>
   );
}
 
export default ContactPage;