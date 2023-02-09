import React from 'react'
// * Imports pictures.jpgs from asset/portfolio for showing a preview of the project
import { arrayDestruct, installNode, navbar, reactParallax, reactSmooth, reactWeather } from '../assets/portfolio'

const Portfolio = () => {
  return (
    <div id='portfolio' name='portfolio' className=''>
      
      <div>
        <p>Portfolio</p>
        <p>Check out some of my works!</p>
      </div>

      <div>
        <div>
          <img src={reactWeather} alt="weather" />
          <div>
            <button>Demo</button>
            <button>Code</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio