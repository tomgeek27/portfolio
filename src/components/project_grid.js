import React, {useEffect} from 'react';
import {getTranslated} from '../helper/translater'
import AOS from 'aos'
import "aos/dist/aos.css";

function ProjectGrid(props) {

  return (
    <div className="width-sized" style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      {
        props.projects.map((element, i) => {
          return <Project key={i} title={element.title} subtitle={element.subtitle} src={element.src} url={element.url} avatarColor={element.avatarColor} delay={(i * 200) + 600}/>         
        })
      }
    </div>
  );
}

function Project(props) {

  // useEffect(() => {
  //   AOS.init({})
  // })

  return (
      <a href={props.url} 
      data-aos="fade-right"
      data-aos-duration={props.delay}
      className="flex-column horizontal-center project-container">
        {props.src ? 
        <img className="img-project rounded-circle" src={props.src} alt=""/> :
        <div className="rounded-circle vertical-center horizontal-center avatar" style={{
          backgroundColor: props.avatarColor,
        }}>
          {props.title[0]}
        </div>}
        <div className="flex-column horizontal-center">
          <span className="title-project">{getTranslated(props.title)}</span>
          <div className="subtitle-project m-top5">{getTranslated(props.subtitle)}</div>
        </div>
      </a>
  );
}

export default ProjectGrid;