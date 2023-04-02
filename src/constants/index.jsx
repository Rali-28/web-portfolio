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

// * Image import for portfolio previews
// * assets/portfolio
// * myResume pdf file
import {  } from '../assets/portfolio'

// * Images for use in skills section
import { css, github, html, javascript, react, tailwind, myResume } from '../assets'

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
export const socialLinks = [
    {
        id: 1,
        title: 'linkedin',
        content: (
            <>
                LinkedIn <FaLinkedin size={30} />
            </>
        ),
        style: 'rounded-tr-md bg-[#0077B5]',
        link: 'https://www.linkedin.com/in/sean-raleigh-janaban-49b3931b9/'
    },
    {
        id: 2,
        title: 'github',
        content: (
            <>
                Github <FaGithub size={30} />
            </>
        ),
        style: 'bg-[#6E5494]',
        link: 'https://github.com/Rali-28'
    },
    {
        id: 3,
        title: 'email',
        content: (
            <>
                Email <FiMail size={30} />
            </>
        ),
        style: 'bg-white', 
        link: 'mailto:janaban.srj@gmail.com'
    },
    {
        id: 4,
        title: 'resume',
        content: (
            <>
                Resume <BsFillPersonLinesFill size={30} />
            </>
        ),
        style: 'rounded-br-md bg-gray-800',
        link: myResume, 
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
        title: ,
        img: ,
        github: ,
        link: 
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