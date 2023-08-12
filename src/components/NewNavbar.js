import React from 'react'
import PropTypes from 'prop-types'
export default function NewNavbar(props) {
  return (
    <>
    <header class="p-3 text-bg-dark">
   <div className="container bg-dark">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">

       
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary mx-2">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white mx-2">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white mx-2">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white mx-2">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 text-white mx-2">About</a></li>
        </ul>

        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
        </form>

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
        </div>
      </div>
    </div>
    </header>
    </>
  )
}
