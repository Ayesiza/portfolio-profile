import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  
    return (
        <div>
        
 <nav className="navbar sticky-top navbar-expand-lg bg-light">
    <div className="container">
      <a className="navbar-brand" href="#">Ayesiza</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <i className="fas fa-bars"></i>
  </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto w-100 justify-content-end">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">ContactMe</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">Other</Link>
                </li>
        </ul>
      </div>
    </div>
  </nav>
      
          <Outlet />
        </div>
      );
}

export default Layout