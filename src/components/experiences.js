import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import location from '../assets/imgs/location.png'
import Feature from './common/feature';

function getTimelineEventElement(list) {

  const displayElement = (x) => {
    return (
      <VerticalTimelineElement
        className="custom-icon custom-container"
        date={x.date}
      >
        <h3 className="exp-title-element">{x.title}</h3>
        <div className="flex-row">
          <img id="location" src={location} alt="location-icon" />
          <div className="exp-location-element">{x.location}</div>
        </div>
        <div className="exp-description-element">{x.description}</div>
      </VerticalTimelineElement>
    )
  }


  return (
    <VerticalTimeline layout="1-column-left" className="custom-line">
      { list.map((x, i) => { return <div key={i}>{displayElement(x)}</div> })}
    </VerticalTimeline>
  )
}

function Experiences(props) {
  return (
    <Feature title={"Experiences"} cit={"All things would be better if they could be done twice."} author={"Johann W. Goethe"} childrenClasses={"no-jump-animated"}>
      <div className="exp-title">
        Education
      </div>
      <div style={{ marginBottom: '80px' }}>
        {getTimelineEventElement(props.educations)}
      </div>
      <div className="exp-title">
        Career
      </div>
      {getTimelineEventElement(props.career)}
      <div style={{ minHeight: '150px' }} />
    </Feature>
  );
}

export default Experiences;