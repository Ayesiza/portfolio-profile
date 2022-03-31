import React from 'react'
import {projects, TimeLineData} from '../../data'
import './projects.css'

const Projects = () => {
  return (
    <div>
        <div className='sectionTitle' >
          Projects
        </div>
    <div className='gridContainer'>
    {projects.map((p, i) => {
      return (
        <div className="blogCard" key={i}>
        <img className='myimg' src={p.image} />
          <div className='TitleContent'>
            <p className='HeaderThree'>{p.title}</p>
            <hr className='Hr'/>
          </div>
          <div className="card-info">{p.description}</div>
          <div>
            <h4 className='TitleContent'>Stack</h4>
            {/* <div className='TagList'>
              {p.tags.map((t, i) => {
                return <Tag key={i}>{t}</Tag>;
              })}
            </div> */}
          </div>
          <div className='UtillityList' >
            <a className='ExternalLinks' href={p.visit}>Code</a>
            <a href={p.source}>Source</a>
          </div >
        </div >
      );
    })}
  </div></div>
  )
}

export default Projects