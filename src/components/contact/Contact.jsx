import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>akonkwadieum222@gmail.com</h5>
            <a href="mailto:akonkwadieum222@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Dieum Akonkwa</h5>
            <a href="https://www.linkedin.com/in/dieumakonkwa/">Connect with me on LinkedIn</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact