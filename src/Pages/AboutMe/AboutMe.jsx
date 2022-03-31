import React from 'react'

const AboutMe = () => {
  return (
    <div>
    <div className="masthead bg-primary text-white text-center" style={{height:'100vh'}}>
            <div className="container d-flex align-items-center flex-column">
              
                <h2 className="page-section-heading text-center text-uppercase text-white">About </h2>
               
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
              
                <div className="row">
                    <div className="col-lg-4 ms-auto">
                      <p className="lead">I am Software Engineer, with three years of experience in website and
software development. I am technically proficient, easy to work
with and I do not stop till its perfect. 
</p>
</div>
                    <div className="col-lg-4 me-auto"><p className="lead">Send me a quick email on
yesiha2001@gmail.com to find out more about what I can do for you.
Specialties: HTML5, CSS,Javascript, NodeJS, Reactjs</p></div>
                </div>
              
                <div className="text-center mt-4">
                    <a className="btn btn-xl btn-outline-light" href="https://startbootstrap.com/theme/freelancer/">
                        <i className="fas fa-download me-2"></i>
                         Download Resume!
                    </a>
                </div>
            </div>
        </div>
        </div>
  )
}

export default AboutMe