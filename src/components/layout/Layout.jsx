import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import  './Layout.css';

const Layout = () => {
    return (
        <div >
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav className='navbar' >
        <div className='logo'>
      <Link to="/" className='linkss' style={{ display: 'flex',fontSize: "2rem", alignItems: 'center', color:"rgba(255, 255, 255, 0.75)" }}>
          <DiCssdeck size="3rem" /> <span>MyPortfolio</span>
      </Link>
      </div>
            <ul className='lists'>
              <li>
                <Link className='linkss' 
                 to="/">Home</Link>
              </li>
              <li>
                <Link className='linkss' 
                 to="projects">Projects</Link>
              </li>
              <li>
                <Link className='linkss'  to="about">About</Link>
              </li>
              
            </ul>
            <div className='socialIcons'>
        <a href="https://github.com/Ayesiza">
          <AiFillGithub size="3rem" />
        </a>
        <a href="https://www.linkedin.com/in/ayesiza-hawah-339700185/">
          <AiFillLinkedin size="3rem" />
        </a>
        <a href="https://google.com">
          <AiFillInstagram size="3rem"/>
        </a>
      </div>
          </nav>
    
          <hr />
    
         
          <Outlet />
        </div>
      );
}

export default Layout