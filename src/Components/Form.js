import React from 'react'

const Form = () => {
  return (
   <>
   <div className='container form py-5 bg-light'>
    <div className='row ms-5 '>
        <div className='col-lg-8 col-sm-12'>

   <form>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"></input>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input type="phone" className="form-control" id="exampleInputPassword1"></input>
  </div>

  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"></input>
  </div>

  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

  <button type="submit" className="btn btn-primary">Submit</button>
</form>

   </div>
   </div>
   </div>
   </>
  )
}

export default Form