import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/dieum-akonkwa/" target='blank'><BsLinkedin/></a>
      <a href="https://github.com/dieum512/" target='blank'><FaGithub/></a>
      <a href="https://twitter.com/dieumakonkw" target='blank'></a>
    </div>
  )
}

export default HeaderSocials 