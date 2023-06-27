import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h1 id='contact'>Contact Us</h1>
      <div className="contact-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <textarea type="text" placeholder="Write your message here" />
        <button class='submit-button'>Submit</button>
      </div>
    </div>
  )
}

export default Contact