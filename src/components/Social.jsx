import React from 'react'
// * Imports links for socials
import { socialLinks } from '../constants'


const Social = () => {
  return (
    /*
      * Main container for Socials
      * Renders the list in a column
        TODO: Rendering for small devices  
    */ 
    <div className='fixed top-[35%] left-0 flex-col lg:hidden lg:flex'>
      <ul>
          {/* 
            // * Renders a list of social media links using the imports from ../constants/index.jsx 
            // * LinkedIn, Github, Email (Gmail), Resume (in respective order)
            // TODO: Fix download
          */}
          {socialLinks.map(({id, content, style, link, download}) => (
            <li 
              key={id}
              className={`flex items-center justify-between w-40 px-4 ml-[-100px] duration-300 ${style} h-14 hover:ml-[-10px]`}
            >
              <a 
                href={link} 
                className={`flex items-center justify-between w-full ${id === 3 ? 'text-black' : 'text-white'}`}
                // download={download} 
                target='_blank'
              >
                {content}
              </a>
            </li>
          ))}
      </ul>
    </div>
    // * End main container
  )
}

export default Social