import React from 'react'
import "./footer.css";
import { FaBehance, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"


const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='row py-5'>
                <div className='col-lg-6 col-sm-12 left'>
                    <div className='location d-flex'>
                        <FaHome size={20}></FaHome>
                        <p>Noida sector-53</p>
                    </div>

                    <div className='phone'>
                      <h4><FaPhone size={20}></FaPhone>  9719200233</h4>  
                    </div>
                     
                    <div className='email'>
                      <h4><FaMailBulk size={20}></FaMailBulk> rajpootneeraj450@gamil.com</h4>  
                    </div>
                </div>

                <div className='col-lg-6 col-sm-12 right py-3  '>
                    <h4 className='py-2'>About me</h4>
                    <p>This is me neeraj rajpoot.react developer.<br></br>I enjoy discussing my new projects and<br></br> design challenges
                        
                    </p>
                    <div className='social'>
                       <FaGithub size={30} className='me-3 '></FaGithub>
                        <FaBehance size={30} className='me-3'></FaBehance>
                       <FaLinkedin size={30} className='me-3'></FaLinkedin>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer