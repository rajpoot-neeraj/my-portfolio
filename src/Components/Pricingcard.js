import React from 'react'
import "./pricing.css";
import { Link } from 'react-router-dom';

const Pricingcard = () => {
  return (
   <>
   <div className='pricing py-5'>
    <div className='container'>
        <div className='row'>
          
            <div className='col-lg-4 mb-2'>
                <div className='card py-3 text-center price'>
                    <h3>- Basic -</h3>
                    
                    <p className='btc'>$ 100</p>
                    <p>- 3days -</p>
                    <p>- 3pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsivedesign -</p>
                    <Link to="/contact"><button className='btn btn-primary'>Purchase Now</button></Link>
                </div>               
            </div>

            <div className='col-lg-4 mb-2'>
                <div className='card py-3 text-center price'>
                    <h3>- Premium -</h3>
                    
                    <p className='btc'>$ 200</p>
                    <p>- 5days -</p>
                    <p>- 3pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsivedesign -</p>
                    <Link to="/contact"><button className='btn btn-primary'>Purchase Now</button></Link>
                </div>               
            </div>

            <div className='col-lg-4 '>
                <div className='card py-3 text-center price '>
                    <h3>- Business -</h3>
                  
                    <p className='btc'>$ 300</p>
                    <p>- 8days -</p>
                    <p>- 5pages -</p>
                    <p>- Featured -</p>
                    <p>- Responsivedesign -</p>
                    <Link to="/contact"><button className='btn btn-primary'>Purchase Now</button></Link>
                </div>               
            </div>

        </div>
    </div>
   </div>
   </>
  )
}

export default Pricingcard