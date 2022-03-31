import React from 'react'
import { projects } from '../../data'

const Projects = () => {
  return (
    <div className="page-section portfolio" >
            <div className="container">
              
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
               
                <div className="row justify-content-center">
                   {projects.map(project =>(
                       
                       <div className="col-md-6 col-lg-4 col-sm-4 mb-2 shadow " key={project.id}>
                           <h4>{project.title}</h4>
                       <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                           <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                               <div className="portfolio-item-caption-content text-center text-white"><i >{project.title}</i></div>
                           </div>
                           <img className="img-fluid" src={project.image} alt="..." />
                       </div>
                       <div>
                          <p className='m-2'>{project.description}</p>
                      </div>
                       <div class=" m-2 d-flex justify-content-around ">
                          <a href={project.source} class="btn btn-primary">Code</a>
                          <a href={project.visit} class="btn btn-secondary">Visit</a>
                      </div>
                      
                   </div>

                   ))}
                    
                   
                </div>
            </div>
        </div>
  )
}

export default Projects