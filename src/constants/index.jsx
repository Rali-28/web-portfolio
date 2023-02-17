/*
 * Every constants to be used will be put here
 * This ensures that easier rendering for 
 * components and avoids too much lines of code
*/

// * React icons for social links
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
// End of social icons
// TODO: Change to pdf of resume
// import { css } from '../assets'

// * Image import for portfolio previews
// * assets/portfolio
import { arrayDestruct, installNode, navbar, reactParallax, reactSmooth, reactWeather, usestate } from '../assets/portfolio'

// * Images for use in skills section
import { css, github, html, javascript, react, tailwind } from '../assets'

// * Navigation Bar links
export const navLinks = [
    {
        id: 1,
        title: 'home',
    },
    {
        id: 2,
        title: 'about',
    },
    {
        id: 3,
        title: 'portfolio',
    },
    {
        id: 4,
        title: 'skills',
    },
    {
        id: 5,
        title: 'contact',
    },
]

// * Social Links
// TODO: Change social links style color to respective logo theme
export const socialLinks = [
    {
        id: 1,
        title: 'linkedin',
        content: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        style: 'rounded-tr-md',
        link: 'https://www.linkedin.com/'
    },
    {
        id: 2,
        title: 'github',
        content: (
            <>
                Github <FaGithub size={30} />
            </>
        ),
        style: '',
        link: 'https://github.com/'
    },
    {
        id: 3,
        title: 'email',
        content: (
            <>
                Email <FiMail size={30} />
            </>
        ),
        style: '', 
        link: 'mailto:janaban.srj@gmail.com' // TODO: Add link to emailing me on gmail janaban.srj@gmail.com
    },
    {
        id: 4,
        title: 'resume',
        content: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        style: 'rounded-br-md',
        link: css, // TODO: Add link to resume pdf & Replace with resume
        // download: true // TODO: Fix download for resume
    },
]

// * About Section Texts
export const about = [
    {
        id: 1,
        text: 'My name is Sean Raleigh Janaban. You can call me Rali, an aspiring programmer and a lifelong learner. Being around computers and gadgets at a young age sparked a curiosity that brought me to the world of technology.',
        br: (
            <br />
        )
    },
    {
        id: 2,
        text: 'I learned while being a club president that even if working alone is peaceful, working with a team brings a lot of merits. I learned a lot of things from being in a group, expanded my network, and opened up to new insights.'
    },
]

// * Portfolio Images for Projects
// TODO: Add links to project
export const portfolioImg = [
    {
      id: 1,
      title: 'array destruct',
      img: arrayDestruct
    },
    {
      id: 2,
      title: 'install node',
      img: installNode
    },
    {
      id: 3,
      title: 'navbar',
      img: navbar   
    },
    {
      id: 4,
      title: 'react parallax',
      img: reactParallax  
    },
    {
      id: 5,
      title: 'react smooth',
      img: reactSmooth  
    },
    {
      id: 6,
      title: 'react weather',
      img: reactWeather  
    },
    {
      id: 7,
      title: 'usestate',
      img: usestate   
    },
]


// * Skills images
export const skillsImg = [
    {
        id: 1,
        title: 'HTML',
        img: html,
        style: 'shadow-orange-500'
    },
    {
        id: 2,
        title: 'CSS',
        img: css,
        style: 'shadow-blue-500'
    },
    {
        id: 3,
        title: 'Javascript',
        img: javascript,
        style: 'shadow-yellow-500'
    },
    {
        id: 4,
        title: 'React.js',
        img: react,
        style: 'shadow-blue-600'
    },
    {
        id: 5,
        title: 'tailwindcss',
        img: tailwind,
        style: 'shadow-sky-500'
    },
    {
        id: 6,
        title: 'Github',
        img: github,
        style: 'shadow-gray-400'
    },]