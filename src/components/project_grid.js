import React, {useEffect} from 'react';
import {getTranslated} from '../helper/translater'
import AOS from 'aos'
import "aos/dist/aos.css";

function ProjectGrid(props) {

  return (
    <div className="row vertical-center">
      {
        props.projects.map((element, i) => {
          return <div key={element.title} className="flex-row vertical-center col-xl-4 col-lg-5 col-md-12">
            {
              <Project title={element.title} subtitle={element.subtitle} src={element.src} url={element.url} avatarColor={element.avatarColor} delay={(i * 200) + 600}/>
            } </div>
        })
      }
    </div>
  );
}

function Project(props) {

  useEffect(() => {
    AOS.init({})
  })

  return (
    <div 
      data-aos="fade-right"
      data-aos-duration={props.delay}
      className="m-all17">
      <a href={props.url} className="project flex-column horizontal-center">
        <div className="overlapped-images">
          {props.src ? <img className="img-project rounded-circle" src={props.src} alt=""/> :
          <div className="rounded-circle vertical-center horizontal-center avatar" style={{
             backgroundColor: props.avatarColor,
          }}>
             {props.title[0]}
          </div>}
        </div>
        <div className="flex-column horizontal-center">
          <span className="title-project">{getTranslated(props.title)}</span>
          <div className="subtitle-project m-top5">{getTranslated(props.subtitle)}</div>
        </div>
      </a>
    </div>
  );
}

export default ProjectGrid;