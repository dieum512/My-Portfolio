import React from 'react';
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.png'

const data = [
  {
    avatar: AVTR1,
    name: 'Syed Atril',
    review: `Dieum Akonkwa is an excellent software developer who has both good coding skills and soft skills. I have had the pleasure of working with him and can confidently say that he is fantastic at what he does. He has a lot of experience in coding and can explain technical concepts to both technical and non-technical people effectively. Dieum is very passionate about software development and always delivers high-quality work. He pays attention to detail and can think critically and creatively, making him a great addition to any team. Dieum is a great team player who is willing to go above and beyond to ensure the success of his projects. I highly recommend him for any software development role.`,
  },
  {
    avatar: AVTR2,
    name: 'Danys Linares',
    review: `I met Dieum in 2022 when we had to show our skills to Microverse which is an online School for Remote Software Developers, we build a small project and made a pair programming session. During this period of time, Dieum proved himself to be a dependable partner and a hard worker with solid problem-solving and technical skills. Although Dieum is a fast learner, he is very careful and cautious about his work. That means he repeatedly runs checks on his programs (and others) before making them public to ensure there aren't any hiccups. Overall, Dieum is a talented, hard-working partner and would be an asset to have on any team.`,
  },
  {
    avatar: AVTR3,
    name: 'Taiwo Enoch',
    review: `Dieum Akonkwa is one of the most committed and skillful developers I've had the pleasure of working with at Microverse. He's super dedicated to his craft, which is exciting and motivating! He's always right on schedule, fancies standard/best coding practices, and has impeccable eyes for perfection - not minding a few requests for changes. He's positive in demeanor, highly collaborative as a team member, and a good communicator.`,
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from partners</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {
          data.map(({ avatar, name, review }, index) => (
            <article key={index} className="testimonial">
              <div className="partner__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="partner__name">{ name }</h5>
              <small className="partner__review">{ review }</small>
            </article>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials