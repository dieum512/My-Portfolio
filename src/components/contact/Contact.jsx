import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';

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
            <a href="mailto:akonkwadieum222@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin/>
            <h4>LinkedIn</h4>
            <h5>Dieum Akonkwa</h5>
            <a href="https://www.linkedin.com/in/dieumakonkwa/" target='_blank'>Connect with me on LinkedIn</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>+243 976 728 689</h5>
            <a href="https://api.whatsapp.com/send?phone=+243976728689" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact