import React from 'react'
import logoemail from '../images/logo-email.png'
import logolinkedin from '../images/logo-linkedin.png'

function Globale() {
  return (
    <div className='composant-globale '>
      <h3 className='globale-h3 globale-contenu'> Malak LAARABI </h3>
      <h4 className='globale-h4 globale-contenu'> Web Developer </h4>
      <span className='globale-span globale-contenu'> Web Link</span>
      
      <div className='classe-button'>
      <a href="mailto:malaklaarabi63@gmail.com" target="_blank" rel='noreferrer'>
      <button className='globale-button button-email'>
        <img src={logoemail} alt='' className='logo-email'/>Email
      </button>
      </a>
      
      <a href='https://www.linkedin.com/in/malak-laarabi-5340b6273/' target="_blank" rel='noreferrer'> 
      <button className='globale-button button-linkedin'>
        <img src={logolinkedin} alt='' className='logo-linkedin'/>LinkedIn
      </button>
      </a>
      </div>
      
      <div className='globale-div'>
        <h3> About </h3>
        <p>
          I recently graduated and have a strong passion for developing and creating websites.
          My goal is to become a skilled web developer and contribute to the development of an innovative
          web site and to work for businesses and individuals.
        </p>
        <h3> Interests </h3>
        <p>
        What I'm interested in right now is joining a dynamic and innovative web development company to gain
         professional experience and contribute to ambitious projects.
        </p>
      </div>

      
    </div>
  )
}

export default Globale
