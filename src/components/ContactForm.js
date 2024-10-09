import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Import emailjs
import '../css/ContactForm.css'; // Import the CSS for the form

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define the email template parameters
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send the email using EmailJS
    emailjs.send('service_ec6vtd5', 'template_ner7q2a', templateParams, 'ZCR8e7yuHoPBvItfk')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSubmitted(true); // Show success message
      })
      .catch((err) => {
        console.error('Failed to send email. Error:', err);
        setError('Failed to send your message. Please try again later.');
      });
  };

  return (
    <section id="ContactForm" className="contact-section">
      <h2>Contact Us</h2>
      {isSubmitted ? (
        <p className="success-message">Thank you for contacting us! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <p className="error-message">{error}</p>}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            />
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      )}
    </section>
  );
}

export default ContactForm;
