import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import Footer from './footer/Footer';

const Layout = () => {
  
    return (
        <div >
     <nav className="navbar navbar-expand-lg bg-light text-uppercase fixed-top" >
            <div className="container">
                <Link className="navbar-brand" to="/">Ayesiza</Link>
                <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="projects">Projects</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="about">About Me</Link></li>
                        <li className="nav-item mx-0 mx-lg-1"><Link className="nav-link py-3 px-0 px-lg-3 rounded" to="contact">Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </nav>   
          <Outlet />
          <Footer/>
        </div>
      );
}

export default Layout