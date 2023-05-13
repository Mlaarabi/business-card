import React from 'react'
import logoTwitter from '../images/logo-twitter.png'
import logoFacebook from '../images/logo-facebook.png'
import logoInstagrame from '../images/logo-instagram.png'
import logoGitHub from '../images/logo-github.png'

function Footer() {
  return (
    <div className='composant-footer'>
      <div className='footer-div'>
        <a href='https://twitter.com/MalakLaarabi'target="_blank" rel='noreferrer'>
         <img src={logoTwitter} alt='' className='footer-image'/>
        </a>
        <a href='https://facebook.com' target="_blank" rel='noreferrer'>
         <img src={logoFacebook} alt='' className='footer-image'/>
        </a>
        <a href='https://www.instagram.com/malak.laarabi2/?next=%2F' target="_blank" rel='noreferrer'>
         <img src={logoInstagrame} alt='' className='footer-image'/>
        </a>
        <a href='https://github.com/Mlaarabi' target="_blank" rel='noreferrer'>
         <img src={logoGitHub} alt='' className='footer-image'/>
        </a>
      </div>
    </div>
  )
}

export default Footer
