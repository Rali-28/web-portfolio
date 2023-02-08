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
        style: 'rounded-br-md',
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
        link: '#'
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
        link: '#',
        download: 'true'
    },
]