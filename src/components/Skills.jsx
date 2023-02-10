import React from 'react'
// * Imports skills images from constants
import { skillsImg } from '../constants'

const Skills = () => {
  return (
    // * Main container div
    <div id='skills' name='skills'>

      <div>
        {/* Header container div */}
        <div>
          <p>Experice</p>
          <p>Technologies that I use and practice.</p>
        </div>
        {/* End header */}

        {/* Skills images */}
        <div>
          {skillsImg.map(({id, title, img}) => (
            <div key={id}>
              <img src={img} alt={title} />
              <p>{title}</p>
            </div>
          ))}
        </div>
        {/* End Skills images */}

      </div>

    </div>
    // End Main container
  )
}

export default Skills