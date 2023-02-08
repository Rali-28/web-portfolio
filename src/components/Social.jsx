import React from 'react'
// * Imports links for socials
import { socialLinks } from '../constants'


const Social = () => {
  return (
    // * Main container for Socials
    <div>
      <ul>
          {socialLinks.map((link) => (
            <li>
              <a href={link.link}>
                {link.content}
              </a>
            </li>
          ))}
      </ul>
    </div>
    // * End main container
  )
}

export default Social