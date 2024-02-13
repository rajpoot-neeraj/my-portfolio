import React from 'react'
import { FaGoogleDrive } from 'react-icons/fa';

const Myskills = () => {
  return (
  <>
  <div className='container skill bg-light mb-5'>
    <div className='row'>
        <div className='text-center'>
            <h1 className=''>My skills</h1>
            <hr class="w-25 m-auto"></hr>
            
        </div>

        <div className="col-lg-4 py-2">
                    <div className="card text-center">
                      <div className="card-body">
                      <FaGoogleDrive ></FaGoogleDrive>
                        <h5 className="card-title text-danger">UI/UX Designer</h5>
                        <p className="card-text  mb-2">As a UI/UX Designer, I specialize in crafting intuitive and visually compelling digital experiences that resonate with users. I am well-versed in industry-standard web design tools and software , including Figma,canva or other similar tools.Using industry-standard tools like  Figma, I translate conceptual ideas into tangible wireframes and prototypes. These prototypes serve as interactive blueprints, allowing stakeholders to visualize the flow and functionality of the final product before development begins.</p>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 py-2 ">
                    <div className="card text-center bg-primary text-white">
                      <div className="card-body">
                      <FaGoogleDrive ></FaGoogleDrive>
                        <h5 className="card-title">Web Designing</h5>
                        <p className="card-text  mb-2">As a Web Designer, I specialize in creating visually appealing and user-friendly websites that effectively communicate brands' messages and engage visitors. I am proficient in HTML and CSS, the fundamental building blocks of web design. Whether translating design mockups into code or customizing existing templates,With the prevalence of mobile devices, responsive design has become essential for ensuring a seamless user experience across various screen sizes and resolutions. </p>
                       
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 py-2">
                    <div className="card text-center">
                      <div className="card-body">
                      <FaGoogleDrive ></FaGoogleDrive>
                        <h5 className="card-title text-danger">Front-end</h5>
                        <p className="card-text  mb-2">As a Front-End Developer,  I specialize in building dynamic and interactive user interfaces using the React JavaScript library.I am proficient in JavaScript, the dynamic programming language that powers interactivity on the web. I am proficient in using front-end frameworks and libraries such as Bootstrap and React.Js. Have a strong command of React's core concepts, including components, props, state, and lifecycle methods.</p>
                       
                      </div>
                    </div>
                  </div>

    </div>
  </div>
  </>
  )
}

export default Myskills