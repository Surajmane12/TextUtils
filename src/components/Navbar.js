import React from 'react'
import PropTypes from 'prop-types'
import mystyle from './About us'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
 

  return (

    // BootStrap Navbar
    <>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* <a><img className="bi me-2" width="40" height="32" role="img" src="logo.png"/></a> */}

        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">{props.aboutText}</Link>
            </li>
            <li className="nav-item dropdown">

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Something else here</a>
                
              </div>
              <div id="darkmodebtn" className={`form-check text-${props.mode === 'light' ? 'dark' : 'light'} my-2 mx-5`}>
                <input className="form-check-input" onClick={props.EnableDM} type="checkbox" value="" id="defaultCheck1" />
                <label className="form-check-label" htmlFor="defaultCheck1">
                  Dark Mode
                </label>
              </div>
            </li>
            
            
            
              
          </ul>
          
          {/* <div className="d-flex">
              <div className="bg-primary rounded mx-2" onClick={()=>{props.EnableDM('primary')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div> 
              <div className="bg-success rounded mx-2" onClick={()=>{props.EnableDM('success')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-danger rounded mx-2" onClick={()=>{props.EnableDM('danger')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>
              <div className="bg-warning rounded mx-2" onClick={()=>{props.EnableDM('warning')}} style={{height:'30px',width:'30px',cursor:'pointer'}}></div>

            </div> */}
          {/* <form className="form-inline my-2 my-lg-0 ">
       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
       <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
     </form> */}
        </div>

      </nav>
    </>




  )

}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
// defaultProps => here if we not pass any props then only it will pass props by default 
Navbar.defaultProps = {
  title: "Default_Title",
  aboutText: "Def_Text"

}