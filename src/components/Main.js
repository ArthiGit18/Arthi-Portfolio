import React from 'react'
import { Hero } from '../pages/Hero'
import Navbar from '../pages/Navbar'
import About from '../pages/About'

const Main = () => {
  return (
    <div>
      <Navbar />
      <hr></hr>
      <Hero />
      <About />
    </div>
  )
}

export default Main