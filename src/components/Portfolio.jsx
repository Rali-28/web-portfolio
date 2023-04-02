import React from 'react'
// * Imports images for portfolio from constants/index.jsx
import { portfolioImg } from '../constants'

const Portfolio = () => {
  return (
    // * Main div container fir portfolio
    <div id='portfolio' name='portfolio' className='text-white bg-gradient-to-b from-black to-gray-800'>
      
      {/* 
        // * Div container for texts and projects
      */}
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>
        
        {/* 
          // * Div for Header texts
        */}
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my works!</p>
        </div>
        
        {/* 
          // * Div for arranging the images portfolio in a grid
          // * Shows 3 columns on big screens
          // * Shows 2 columns for mobile view screens
        */}
        <div className='grid gap-8 px-12 sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
        {portfolioImg.map(({id, title, img, github, link}) => (
          <div key={id} className='rounded-lg shadow-md shadow-gray-600'>
            
              <img src={img} alt={title} className='duration-200 rounded-md hover:scale-105' />

              {/* 
                // * Button that links to a specific project
                // TODO: Add links to button to open a specific project
              */}
              <div className='flex items-center justify-center'>
                <a className='btn-portfolio' href={link} target='_blank'>Demo</a>
                <a className='btn-portfolio' href={github} target='_blank'>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
