import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all fields.');
      isValid = false;
    } else if (!validateEmail(form.email)) {
      setError('Please enter a valid email address.');
      isValid = false;
    } else if (form.message.length < 10 || form.message.length > 160) {
      setError('The message must be between 10 and 160 characters.');
      isValid = false;
    }

    if (isValid) {
      setError('');
      setSuccessMessage('Thanks for your message!');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className="main">
      <h2>Contact Me</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Your name"
              value={form.name}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Your email"
              value={form.email}
              onChange={onChangeInput}
            />
          </div>
          <div className="form-group">
            <textarea
              className="textarea"
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={onChangeInput}
            ></textarea>
          </div>
          <button type="submit" className="button">
            Send Message
          </button>
        </form>
        {error && <p className="error">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default Contact;
