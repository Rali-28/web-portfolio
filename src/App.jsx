import React from 'react'
import { About, Contact, Hero, Navbar, Portfolio, Skills, Social } from './components'

const App = () => {
  return (
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