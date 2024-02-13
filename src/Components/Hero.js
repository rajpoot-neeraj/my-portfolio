import React, { Component } from 'react'
import "./hero.css";

class Hero extends Component{
    render(){
        return (
            <>
            <div className='container'>
             <div className='row'>
                 <div className='col-lg-12 hero-img'>
                     <div className='heading'>
                         <h1>{ this.props.heading}</h1>
                         <p>{this.props.text}</p>
                     </div>
                 </div>
             </div>
            </div>
            </>
           )
         }
    }


export default Hero