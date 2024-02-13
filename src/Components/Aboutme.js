import React from 'react'
import { Link } from 'react-router-dom'
import syntax from "../assets/syntax.jpg"
import "./about.css";

const Aboutme = () => {
  return (
    <>
    <div className='container'>
        <h1 className='text-center bg-light'>About <span className='text-primary'>me</span></h1>
        <hr className='m-auto w-25'></hr>
        <div className='row'>
            <div className='col-lg-6 left '>
                <h1 className='bg-light'>What do you <span className='text-primary'>want to know ?</span></h1>
                <p className='bg-light'>Passionate web designer with a flair for creating visually stunning and user-friendly digital experiences. dedicating to translating ideas into engaging designs, I combine creativity with technical expertise to craft websites that captivate and convert. Proficient in HTML,CSS and responsive design,I thrive on delivering innovative solutions tailored to meet clients' unique needs.Let's transform concepts into captivating online realities.</p>
             <Link to={"#"}><button className='btn btn-warning'>Download CV</button></Link>
             
              {/* accordion section */}
             <div className="accordion py-5" id="accordionExample">
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                             My hobbies
                            </button>
                          </h2>
                          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              Beyond the realm of web design, I find joy in diverse hobbies that fuel my creativity and enrich my perspective. Behind the lens, I capture beauty of the world through photograpgy,exploring visual narratives that inspire my design journey.  
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              My Qualification
                            </button>
                          </h2>
                          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              I have completed my graduation from Dr Bhimrao Ambedkar University Agra.And recently completed Web designer diploma from Ducat IT Institute Noida sector 63. 
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              My Dreams
                            </button>
                          </h2>
                          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                              A dreamer in the world of code,I aspire to contribute to the ever-evolving tech landscape,creating solutions that transcend,expectations. My ultimate goal is to be a catalyst for positive change, using design as a powerfull tool to enhance user experiences and leave a lasting impact.join me on this journey where dreams meet pixels, and together ,we will shape a digital landscape that inspires and transforms. 
                            </div>
                          </div>
                        </div>
                      </div>

            </div>

            <div className='col-lg-6 right py-5 m-auto text-end aboutpic'>
              <img src={syntax} className='img-fluid' alt='#'></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Aboutme