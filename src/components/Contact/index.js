import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      } 
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`Your ${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
    }
  }  

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h2 data-testid="h1tag">Contact Me</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email"/>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea defaultValue={message} onBlur={handleChange} name="message" rows="5" />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button data-testid="buttontag" type="submit">Submit</button>
      </form>
      <div>
        <h2>Send me an email: <a href="mailto: mtlankenau@gmail.com">mtlankenau@gmail.com</a></h2>
        <h2>Call or text me at <a href="tel:7033899409">703-389-9409</a></h2>
      </div>
    </section>
  );
}

export default Contact;