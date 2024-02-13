import React from 'react'
import "./aboutcontent.css";
import { Link } from 'react-router-dom';
import aboutbg1 from "../assets/aboutbg1.jpg"
import aboutbg2 from "../assets/aboutbg2.jpg"


const AboutContent = () => {
  return (
    <>
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 about-content text-center m-auto'>
                <h1 className='bg-light'>Lets discuss something <br></br><span className='text-primary'>about myself</span></h1>
                <p className='py-2 bg-light'>As a Front-End Developer, I specialize in building dynamic and interactive user interfaces using the React JavaScript library.I am proficient in JavaScript, the dynamic programming language that powers interactivity on the web. I am proficient in using front-end frameworks and libraries such as Bootstrap and React.Js. Have a strong command of React's core concepts, including components, props, state, and lifecycle methods</p>
                <Link to={"contact"}><button className='btn btn-primary py-2'>contact</button></Link>
            </div>

            <div className='col-lg-6 right'>
                <div className='img-container'>
                <div className='img-stack top'>
                    <img src={aboutbg2} className='img' alt=''></img>
                </div>
                <div className='img-stack bottom'>
                    <img src={aboutbg1} className='img' alt=''></img>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AboutContent