import React from 'react'
import Projects from '../projects/Projects'
import './home.css'

const Home = () => {
  return (
    <div>
    <div className='home'>
     <div>
        <div className='sectionTitle' >
          Welcome To <br />
          My Personal Portfolio
        </div>
        <div className='sectionText'>
        I am a Software Engineer, with three years of experience in website and software development. I’m technically proficient, easy to work with and I don’t stop till it’s perfect, so send me a quick email on yesiha2001@gmail.com to find out more about what I can do for you. Specialties: HTML5, CSS,Javascript, NodeJS, Reactjs
        </div>
        </div> 
        <div>
     <img  src='./myProfile.jpg' alt='itsme'/>
     </div>
    
    </div>
     <Projects/>
     </div>

  )
}

export default Home