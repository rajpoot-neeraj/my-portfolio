import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Form from '../Components/Form'

const Contact = () => {
  return (
   <>
    <Navbar></Navbar>
    <Hero heading="CONTACT" text="Lets have a chat"></Hero>
    <Form></Form>
    <Footer></Footer>
   </>
  )
}

export default Contact