import React from 'react'
import "./header.css";
import ilaptop7 from "../assets/ilaptop7.jpg"
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
   
        <div className='container'>
            <div className='row my-2'>
                <div className='col-lg-12 col-sm-12 hero '>

                    <div className='mask'>
                   <img className='into-img' src={ilaptop7} alt='into'></img>
                   </div>

                   <div className='content '>
                    
                    <h1>I'am Neeraj Rajput</h1>
                    <h4 className='text-white'>Web designer</h4>
                    <p className='text-white'>Welcome to my corner of the digital realm,where ceativity meets functionality and design tells a story.As a passionate web designer,I specialize in crafting captivating online experiences that resonate with audiences.</p>

                    <Link to="/project"><button className='btn btn-warning  px-3'>Project</button></Link>
                        <Link to="/project"><button className='btn btn-light'>Contact</button></Link>

                       
                   </div>
                                  
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Header