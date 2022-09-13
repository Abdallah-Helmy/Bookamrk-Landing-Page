import React from 'react';
import './Contact.css';

export const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h6>35.000+ already joined</h6>
      <h3>Stay up-to-date with what we're doing</h3>
      <form>
        <input type="email" required />
        <button className="btn">Contact Us</button>
      </form>
    </div>
  );
};
