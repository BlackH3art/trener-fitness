import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { updateContactFormData } from './store/actionCreators';

import './styles/contactForm.css';

const ContactForm = () => {

  const [formContactData, setFormContactData] = useState({})

  const dispatch = useDispatch()
  const reduxFormContactData = useSelector(state => state.formContactData)

  useEffect(() => {
    setFormContactData(reduxFormContactData)
  }, [])

  const handleChange = (e) => {
    setFormContactData({
      ...formContactData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateContactFormData(formContactData))
  }

  return ( 
    <>
        <div className="App-header">
          <div className="form-container">
            <form onSubmit={handleSubmit}>

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

              <div className="contactform-button-container">
                <button type="submit" className="btn btn-primary">wyślij</button>
              </div>

            </form>
          </div>
          
        </div>
    </>
   );
}
 
export default ContactForm;