import React from 'react';
import CTA from './CTA';
import './header.css'
import HeaderSocials from './HeaderSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dieum Akonkwa</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>

        <div className="me">
          <img src="" alt="" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>

        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header