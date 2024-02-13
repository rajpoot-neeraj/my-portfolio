import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import AboutContent from '../Components/AboutContent'

const About = () => {
  return (
    <>
     <Navbar></Navbar>
     <Hero heading="ABOUT" text="I am a friendly Front-end-Developer"></Hero>
     <AboutContent></AboutContent>
    <Footer></Footer>
    </>
  )
}

export default About