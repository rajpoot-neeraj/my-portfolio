import React from 'react'
import "./heropage.css"
import neeraj from "../assets/neeraj.png"
import { Link } from 'react-router-dom'

const HeroPage = () => {
  return (
   <>
   <div className='container py-5 hero-container'>
   <div className='row'>

    <div className='col-lg-6 text-center m-auto text-white'>
        <h1>I'am Neeraj Rajput</h1>
        <p className='py-2'>I am a React Front End developer<br></br> I create a responsive secure website for my clients</p>
        <Link to={"contact"}><button className='btn btn-primary py-2'>contact</button></Link>
    </div>

    <div className='col-lg-6 heroimg text-center py-5'>
    <img src={neeraj} className='img-fluid' alt='#'></img>
    </div>
   </div>
   </div>
   </>
  )
}

export default HeroPage