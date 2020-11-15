import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { cooperateLead } from '../cooperate form/store/actionCreators';

import ContactForm from '../cooperate form/ContactForm.jsx';
import CooperateForm from '../cooperate form/CooperateForm.jsx';

import './styles/contact.css';

const ContactPage = () => {

  const cooperateFlag = useSelector(state => state.cooperateFormActive);
  const dispatch = useDispatch();

  const handleActiveContactForm = () => {
    dispatch(cooperateLead(false))
  }
  const handleActiveCooperateForm = () => {
    dispatch(cooperateLead(true))
  }

  const handleKeyPress = () => {

  }

  const reverse = cooperateFlag ? "-reverse" : "";

  const activeForm = cooperateFlag ? <CooperateForm /> : <ContactForm />;

  return ( 
    <>
      <div className="contactpage-container">
        <div className="page-title-container">
          <h1 className="action-call">kontakt</h1>
        </div>
        
        <div className="forms-controler-container">
          <div className="controling-buttons-container">
            <div className={`first-option-div${reverse}`} tabIndex={0} onKeyPress={handleKeyPress} onClick={handleActiveCooperateForm} role="button"> <h3 className="form-title">zostań podopiecznym</h3></div>
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