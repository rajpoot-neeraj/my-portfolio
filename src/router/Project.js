import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Pricingcard from '../Components/Pricingcard'
import WorkCard from '../Components/WorkCard'



const Project = () => {
  return (
    <>
    <Navbar></Navbar>
    <Hero heading="PROJECTS" text="Some of my most recent works"></Hero>
    <WorkCard></WorkCard>
    <Pricingcard></Pricingcard>
    <Footer></Footer>
    </>
  )
}

export default Project