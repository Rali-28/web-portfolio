import React, { useState } from 'react'
// * gets navLinks objects for navbar links
import { navLinks } from '../constants'
// * enables the use of font-awesome icons by the use of react-icons, a bar and x for navbar mobile view
import { FaBars, FaTimes } from 'react-icons/fa'
/* 
  * Imports smooth scrolling for reactjs
  * Scroll is named as animateScroll for easy naming
*/
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
    // * Main Navbar Container 
    <nav className='sticky flex items-center justify-between w-full h-20 px-4 text-white bg-black'>

      {/* Cursive styling of my nickname on left of navbar */}
      <h1 className="ml-2 text-5xl font-signature">
        Rali
      </h1>

      {/* Renders the desktop view navbar of links from navLinks
          Hides the navbar on small screens < 768px */}
      <ul className="hidden md:flex">

        {navLinks.map(({id, title}) => (

          // Enlargens the links when hovered
          <li 
            key={id}
            className="px-4 font-medium text-gray-500 capitalize duration-200 cursor-pointer hover:scale-105"
          >
            {/* 
              // * Navbar smooth scrolling to different sections
              // TODO: Show which section is active
            */}
            <Link
              activeClass="active"
              to={`${title}`}
              smooth={true}
              duration={500}
            >
              {/* renders the texts for the navbar */}
              {title}
            </Link>
          </li>
        ))}
      </ul>

      {/* 
      // TODO: CLOSE THE MOBILE VIEW WHENEVER A LINK IS CLICKED 
      */}
      {/* Mobile navbar open and close button */}
      <div
        onClick={() => setToggle(!toggle)}
        className="z-10 pr-4 text-gray-500 cursor-pointer md:hidden">

          {/* // TODO: add transition animation for the bar and x of the navbar's mobile view */}
          {/* Uses useState to toggle between false(FaBars) and true(FaTimes) */}
          {toggle ? <FaTimes size={30}/> : <FaBars size={30} />}

      </div>
      
      {/* // TODO: Add animation to opening and closing of mobile navbar */}
      {/* Mobile Navbar rendering of links */}
      {toggle && (
        <ul className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">

          {navLinks.map((link) => (
          
              // Enlargens the links when hovered
              <li className="px-4 py-6 text-4xl font-medium text-gray-500 capitalize cursor-pointer">
              
                {/* anchor tag for different parts of the webpage */}
                  <a href={`#${link.title}`}>
          
                    {/* renders the texts for the navbar */}
                    {link.title}
          
                  </a>
                </li>
              ))}  
          </ul>
      )}
      
    </nav> // * Main Navbar Container
  )
}

export default Navbar