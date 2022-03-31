import React from 'react'
import Projects from '../Projects/Projects'
import './home.css'

const Home = () => {
  return (
    <div>
      <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
       
        <img className="masthead-avatar mb-5" src="/images/myProfile.jpg" alt="..." />
        
        <h1 className="masthead-heading text-uppercase mb-0">Ayesiza Hawah</h1>
        
        <div className="divider-custom divider-light">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
        </div>
       
        <p className="masthead-subheading font-weight-light mb-0">Front-End Developer - Fullstack Engineer - UIX Designer</p>
    </div>
</header>
<Projects />
    </div>
  )
}

export default Home