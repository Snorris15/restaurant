import React, { useRef, useState } from 'react'
import "../styling/Contact.css"
import emailjs from "@emailjs/browser"

function Contact() {

  const form = useRef ();
  const [showform, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm(
      "service ID",
      "template_jg7l49p",
      form.current,
      "private key"
    )
      . then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }

      );

      clicked ();
    };

const clicked = () => setShowForm(false);

return (
<div className='contact'>
  <div className="contact-form">
    <h2>Contact Us</h2>

    {showform ? (
      <form
      ref={form}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank">
      
      <div className="form-group">
          <label htmlFor="Name">Name</label>
          <input type="text" id="name" name="name"required></input>
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <input id="message" name="message" required></input>
            </div>
            <button type="submit">Form</button>
            </form>
            ): (
              <div className="sentFrom">Thank you, your message was sent.</div>
            
            )}
            
          </div>
        </div>
  
  )
}

export default Contact