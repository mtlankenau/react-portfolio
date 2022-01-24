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
        <div class="mb-3">
          <label htmlFor="name" class="form-label">Name:</label>
          <input type="text" defaultValue={name} onBlur={handleChange} class="form-control" placeholder="Your name" name="name" />
        </div>
        <div class="mb-3">
          <label htmlFor="email" class="form-label">Email address:</label>
          <input type="email" defaultValue={email} onBlur={handleChange} name="email" class="form-control" placeholder="name@example.com"/>
        </div>
        <div class="mb-3">
          <label htmlFor="message" class="form-label">Message:</label>
          <textarea defaultValue={message} onBlur={handleChange} name="message" rows="5" class="form-control" />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">Submit</button>
        </div>
      </form>
      <div>
        <p>Send me an email: <a href="mailto: mtlankenau@gmail.com">mtlankenau@gmail.com</a></p>
        <p>Call or text me at <a href="tel:7033899409">703-389-9409</a></p>
      </div>
    </section>
  );
}

export default Contact;