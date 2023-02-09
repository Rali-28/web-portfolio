import React from 'react'
// * Imports images for portfolio from constants/index.jsx
import { portfolioImg } from '../constants'

const Portfolio = () => {
  return (
    <div id='portfolio' name='portfolio' className=''>
      
      <div>
        <p>Portfolio</p>
        <p>Check out some of my works!</p>
      </div>

      <div>
        {portfolioImg.map(({id, title, img}) => (
          <div
            key={id}
          >
            <img src={img} alt={title} />
            
            <div>
              <button>Demo</button>
              <button>Code</button>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default Portfolio
