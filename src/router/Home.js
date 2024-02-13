import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Aboutme from '../Components/Aboutme'
import Form from '../Components/Form'
import Myskills from '../Components/Myskills'
import WorkCard from '../Components/WorkCard'
// import HeroPage from '../Components/HeroPage'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      {/* <HeroPage></HeroPage> */}
      <Aboutme></Aboutme>
      <Myskills></Myskills>
      <WorkCard></WorkCard>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}

export default Home