import React from 'react'
// * gets navLinks objects for navbar links
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    // * Main Navbar Container 
    <nav className='sticky flex items-center justify-between w-full h-20 px-4 text-white bg-black'>

      {/* Cursive styling of my nickname on left of navbar */}
      <h1 className="ml-2 text-5xl font-signature">
        Rali
      </h1>

      {/* Renders a list of link from navLinks
          Hides the navbar on small screens < 768px 
      */}
      <ul className="hidden md:flex">
        {navLinks.map((link) => (
          // Enlargens the links when hovered
          <li className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105">
            {/* anchor tag for different parts of the webpage */}
            <a href={`#${link.title}`}>
              {/* renders the texts for the navbar */}
              {link.title}
            </a>
          </li>
        ))}
      </ul>

    </nav> // * Main Navbar Container
  )
}

export default Navbar