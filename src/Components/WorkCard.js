import React from 'react'
import { Link, } from 'react-router-dom'
import banner3 from "../assets/banner3.jpg"
import tech6 from "../assets/tech6.jpg"
import gym3 from "../assets/gym3.jpg"


const WorkCard = () => {
  return (
   <>
   <div className='container py-5'>
    <h1 className='text-center py-3 bg-light'>- PROJECTS -</h1>
    <hr className='m-auto w-25 pb-5'></hr>
    <div className='row'>

        <div className='col-lg-4'>
        <div class="card bg-light">
  <img src={banner3} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title text-center">Business Development Website</h5>
    <p class="card-text">"Empowering growth:stretegic solutions for Business Development success" Trans forming challenges into opportunities,We drive growth and foster success in the ever-evolving marketplace.</p>
   <Link to={"https://idtbusinesswebsite.netlify.app/"}><button className='btn btn-primary ms-5 w-25'>view</button></Link>
   <Link to={"#"}><button className='btn btn-warning ms-5 w-25'>code</button></Link>
  </div>
</div>
        </div>

            <div className='col-lg-4'>
        <div class="card bg-light">
  <img src={tech6} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title text-center">Techno Web Canon</h5>
    <p class="card-text">"Immerse in the Beat: Unveilling the pulse of innovation in the world of technology. Explore,Experience,and Elevate your Digital odyssey with cutting -edge insights and Futuristic discoveries."</p>
   <Link to={"https://canon-techno.netlify.app/"}><button className='btn btn-primary ms-5 w-25'>view</button></Link>
   <Link to={"#"}><button className='btn btn-warning ms-5 w-25'>code</button></Link>
  </div>
</div>
        </div>

             <div className='col-lg-4'>
        <div class="card bg-light">
  <img src={gym3} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title text-center">Gym Website</h5>
    <p class="card-text">"Revitalize your lifestyle, transform your strength:join our fitness community for a journey towards wellness and personal triumph.Unleashing the power within, our GYM is your path to health,happiness and a stronger you."</p>
   <Link to={"https://golden-gym-website.netlify.app/"}><button className='btn btn-primary ms-5 w-25'>view</button></Link>
   <Link to={"#"}><button className='btn btn-warning ms-5 w-25'>code</button></Link>
  </div>
</div>
        </div>        

    </div>
   </div>
   </>
  )
}

export default WorkCard