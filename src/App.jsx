import React from 'react'
import { About, Contact, Hero, Navbar, Portfolio, Skills, Social } from './components'

const App = () => {
  return (

    /*
      ! Issue: Section rendering overlaps because of h-screen 
      TODO: Fix rendering issue of whole sections change h-screen
      
      TODO: Combine similar stylings into one using @apply to provide a cleaner code

      TODO: Create better comments for easily understanding the codes

      TODO: Update readme.md
          * Techs used and why
          * Credits for the used assets
          * Credits for the tutorial
    */
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <Social />
    </div>
  )
}

export default App