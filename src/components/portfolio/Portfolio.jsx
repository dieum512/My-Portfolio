import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Pollstar',
    detail: 'The purpose of this websit is to keep you updated on upcoming concerts in America.',
    github: 'https://github.com/dieum512/HTML-basic-JavaScript-Capstone',
    demo: 'https://dieum512.github.io/HTML-basic-JavaScript-Capstone/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Todo List',
    detail: 'The purpose of this websit is to help ypu organize your day by writing in there the tasks to do but also to check the tasks that are already done',
    github: 'https://github.com/dieum512/To-do-list-test',
    demo: 'https://dieum512.github.io/To-do-list-test/dist/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Leaderboard',
    detail: 'The Leaderboard displays scores submited by different players. You can also submit your score there too and it will be saved in an external API',
    github: 'https://github.com/dieum512/Leaderboard',
    demo: 'https://dieum512.github.io/Leaderboard/dist/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Calculator',
    detail: `This is just a simple calculator that helps you do some math operations but also loads the some life's quotes on every refresh of the page`,
    github: 'https://github.com/dieum512/math-magicians',
    demo: 'https://math-magicians-3myx.onrender.com/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Countries App',
    detail: 'This contains the list of all the countries in the world and helps you find some different informations for each and every one of them like the area, capital, population, etc.',
    github: 'https://github.com/dieum512/countries-app',
    demo: 'https://deploy-preview-1--snazzy-stroopwafel-091edc.netlify.app/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      {/* <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="#" className="btn" target='_blank'>Github</a>
          <a href="" className="btn btn-primary" target='_blank'>Live Demo</a>
        </article>
      </div> */}
    </section>
  )
}

export default Portfolio