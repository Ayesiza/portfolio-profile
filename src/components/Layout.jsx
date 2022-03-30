import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
          {/* A "layout route" is a good place to put markup you want to
              share across all the pages on your site, like navigation. */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              
            </ul>
          </nav>
    
          <hr />
    
         
          <Outlet />
        </div>
      );
}

export default Layout