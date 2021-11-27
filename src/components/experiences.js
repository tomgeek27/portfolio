import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import location from '../assets/imgs/location.png'
import { getTranslated } from '../helper/translater';
import Feature from './common/feature';

const EXPERIENCES = {
  it: "Esperienze",
  en: "Experiences"
}

const CAREER = {
  it: "Carriera",
  en: "Career"
}

function getTimelineEventElement(list) {

  const displayElement = (x) => {
    return (
      <VerticalTimelineElement
        className="custom-icon custom-container"
        date={getTranslated(x.date)}
      >
        <h3 className="exp-title-element">{getTranslated(x.title)}</h3>
        <div className="flex-row">
          <img id="location" src={location} alt="location-icon" />
          <div className="exp-location-element">{getTranslated(x.location)}</div>
        </div>
        <div className="exp-description-element">{getTranslated(x.description)}</div>
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
    <Feature title={{
      it: "Esperienze",
      en: "Experiences"
    }} cit={"All things would be better if they could be done twice."} author={"Johann W. Goethe"} childrenClasses={"no-jump-animated"}>
      <div className="exp-title">
        {getTranslated(EXPERIENCES)}
      </div>
      <div style={{ marginBottom: '80px' }}>
        {getTimelineEventElement(props.educations)}
      </div>
      <div className="exp-title">
        {getTranslated(CAREER)}
      </div>
      {getTimelineEventElement(props.career)}
      <div style={{ minHeight: '150px' }} />
    </Feature>
  );
}

export default Experiences;