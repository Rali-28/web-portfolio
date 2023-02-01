import React from 'react'
// imports the heroImg from assets
import { heroImg } from '../assets'
// imports a right arrow icon from react-icons/bi
import { BiRightArrowCircle } from 'react-icons/bi'

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen text-white bg-gradient-to-b from-black to-gray-800">
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg px-3 mx-auto text-center md:text-left md:flex-row">

        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl font-bold sm:text-6xl">
            I am a Junior Web Developer
          </h2>

          <p className="py-5 text-gray-500">
            I am very eager to learn more about the web development field. I have experince in creating website by using HTML, CSS, Javascript, TailwindCSS, and ReactJS.
          </p>

          <div>
            <div>
              <button className="flex items-center px-6 py-3 my-2 rounded-md cursor-pointer group w-fit bg-gradient-to-r from-cyan-500 to-blue-500 text-[25px] mx-auto md:mx-0">
                Portfolio 
                  <span className="px-2 duration-300 group-hover:rotate-90"><BiRightArrowCircle size={30} /></span>
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={heroImg} alt="hero_image"
          className="w-2/3 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl md:w-full" />
        </div>
      </div>      
    </div>
  )
}

export default Hero