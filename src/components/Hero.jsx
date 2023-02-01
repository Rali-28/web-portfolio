import React from 'react'
// imports the heroImg from assets
import { heroImg } from '../assets'
// imports a right arrow icon from react-icons/bi
import { BiRightArrowCircle } from 'react-icons/bi'

const Hero = () => {
  return (
    // Main div of the hero section
    <div name="home" id="home" className="w-full h-screen text-white bg-gradient-to-b from-black to-gray-800">

      {/* 
          Div for handling two sections of the webpage, the Introduction and profile picture
          Shows the two section in a column on large screens and a row on small screens
      */}
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-3 mx-auto md:flex-row">

        {/* 
            Div for the introduction and the portfolio button
            Texts and button are alinged on the left side for large screens
            Aligned on the center for small screens
        */}
        <div className="flex flex-col justify-center h-full text-center md:text-left">
          <h2 className="text-4xl font-bold sm:text-6xl">
            I am a Junior Web Developer
          </h2>

          <p className="py-5 text-gray-500">
            I am very eager to learn more about the web development field. I have experince in creating website by using HTML, CSS, Javascript, TailwindCSS, and ReactJS.
          </p>

          <div>
            {/* The portfolio button that have acolor of cyan to blue
                aligned as a column to make right arrow appear besides "Portfolio"
            */}
            <button className="flex items-center px-6 py-3 my-2 rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] mx-auto md:mx-0">
              Portfolio 
              {/* Shows a right arrow in a circle besides the "Portfolio" */}
                <span className="px-2 duration-300 group-hover:rotate-90">
                  <BiRightArrowCircle size={30} />
                </span>
            </button>
          </div>
        </div>

        {/* // TODO: CHANGE INTO A PROFESSIONAL PICTURE OR JUST SIMPLY A PICTURE OF MYSELF
        */}
        {/* Profile picture of the creator */}
        <div>
          <img src={heroImg} alt="profile_picture"
          className="w-2/3 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl md:w-full" />
        </div>
      </div>      
    </div>
  )
}

export default Hero