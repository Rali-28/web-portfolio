import React from 'react'
// * Imports texts for the Baout section
import { about } from '../constants'

const About = () => {
  return (
    // * Main container for the About Section
    <div id='about' name='about' className='w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black'>

      {/* 
        // * About Section container for Headers and Texts 
      */}
      <div className='flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto'>

        {/* //* About Section Header */}
        <div className='pb-8'>
          <p className='inline text-4xl font-bold border-b-4 border-gray-500'>
            About
          </p>
        </div>

        {/* 
          // TODO: Put a professional "About Me" statements in here.
          // * Renders the Texts for showing About me
          // * Adds a mt-20 on the first paragraph
          // * Paragraphs are indented
        */}
        {about.map(({id, text, br}) => (
        <div
          key={id}
        >
          <p className={`${id === 1 ? 'mt-20' : ''} text-xl indent-10`}>
            {text}
          </p>
          
          {br}

        </div>
        ))}
          
      </div>

    </div>
  )
}

export default About