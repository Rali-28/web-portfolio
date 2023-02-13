import React from 'react'
// * Imports skills images from constants
import { skillsImg } from '../constants'

const Skills = () => {
  return (
    // * Main container div
    <div id='skills' name='skills' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black'>

      <div className='flex flex-col justify-center max-w-screen-lg p-4 mx-auto text-white'>
        {/* Header container div */}
        <div>
          <p className='inline p-2 text-4xl font-bold border-b-4 border-gray-500'>Skills</p>
          <p className='py-6'>Technologies that I use and practice.</p>
        </div>
        {/* End header */}

        {/* 
          // TODO: Change images to actual skills that I have 
          // * Skills images
          // * Renders in 3 columns for big screens
          // * Renders in 2 or < columns for smaller screens  
        */}
        <div className='grid w-full gap-8 px-12 py-8 text-center sm:grid-cols-2 md:grid-cols-3 sm:px-0'>
          {skillsImg.map(({id, title, img, style}) => (
            <div key={id} className={`${style} py-2 duration-500 rounded-lg shadow-md hover:scale-105`}>
              <img src={img} alt={title} className='w-20 mx-auto' />
              <p>{title}</p>
            </div>
          ))}
        </div>
        {/* End Skills images */}

      </div>

    </div>
    // End Main container
  )
}

export default Skills