import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './css/contact.css';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs.send(
      'service_tola7lx', 
      'template_dmp1c5a', 
      formState,
      'ZaMuzsGigsYzIOzaY'      
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error('FAILED...', err);
      setIsSending(false);
      setError('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formState.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="name.example@gmail.com"
            value={formState.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Say Hello!"
            value={formState.message}
            onChange={handleChange}
            required
          ></textarea>
         
        </form>
        <button type="submit" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send'}
          </button>
          {isSent && <p className="success-message">Message sent successfully!</p>}
          {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
