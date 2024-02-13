import React from 'react'
import { Link } from 'react-router-dom'
// import N from "../assets/N.png"
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div className="container">
    <Link className="navbar-brand ms-5 fs-2" to={""}><img src={logo} alt='nj' className='img-fluid mylogo rounded-3' width={70} height={70}></img></Link> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
        <li className="nav-item">
          <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to={"/about"} className="nav-link active" aria-current="page">About</Link>
        </li>
        <li className="nav-item">
          <Link to={"/project"} className="nav-link active" aria-current="page">Project</Link>
        </li>
        <li className="nav-item">
          <Link to={"/contact"} className="nav-link active" aria-current="page">contact</Link>
        </li>
       
        <Link to="/contact"><button className='btn btn-primary'>Join me</button></Link>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar