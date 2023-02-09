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
import { css } from '../assets'

// * Image import for portfolio previews
// * assets/portfolio
import { arrayDestruct, installNode, navbar, reactParallax, reactSmooth, reactWeather, usestate } from '../assets/portfolio'

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
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea ad excepturi recusandae doloremque eius, dolores repellat ducimus dolorem repudiandae mollitia repellendus id facere odit debitis quidem officia est magnam!',
        br: (
            <br />
        )
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ea ad excepturi recusandae doloremque eius, dolores repellat ducimus dolorem repudiandae mollitia repellendus id facere odit debitis quidem officia est magnam!'
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
