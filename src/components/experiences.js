import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import location from '../assets/imgs/location.png'
import { getTranslated } from '../helper/translater';
import Content from './common/content';

const EXPERIENCES = {
  it: "Istruzione",
  en: "Education"
}

const CAREER = {
  it: "Carriera",
  en: "Career"
}

function getTimelineEventElement(list) {

  const displayElement = (x) => {
    let iconDim = x.iconDim ?? 40
    let border = x.iconBorder ?? 0
    let iconUrl = x.iconUrl ?? 'https://cdn-icons-png.flaticon.com/128/4457/4457646.png'
    return (
      <VerticalTimelineElement
        className="custom-icon custom-container"
        date={getTranslated(x.date)}
        iconStyle={{
          backgroundImage: `url(${iconUrl})`,//'url(https://cdn-icons-png.flaticon.com/128/3313/3313480.png)',
          backgroundSize: `${iconDim}px ${iconDim}px`,
          backgroundPosition: '50% 50%',
          backgroundRepeat: 'no-repeat',
          boxShadow: `inset 0px 0px 0px ${border}px #323232, 0px 0px 7px 4px white`
        }}
        iconClassName="vertical-timeline-element-icon"
      >
        <div className="exp-title-element">{getTranslated(x.title)}</div>
        <div className="flex-row" style={{marginTop: '5px'}}>
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
    <Content title={{
      it: "Esperienze",
      en: "Experiences"
    }} cit={"All things would be better if they could be done twice."} author={"Johann W. Goethe"} childrenClasses={"no-jump-animated"}>
      <div className="width-sized-margined">
        <div className="exp-title">
          {getTranslated(CAREER)}
        </div>
        <div style={{ marginBottom: '80px' }}>
          {getTimelineEventElement(props.career)}
        </div>
        <div className="exp-title">
          {getTranslated(EXPERIENCES)}
        </div>
        <div>
          {getTimelineEventElement(props.educations)}
        </div>
        {/* <div style={{ minHeight: '150px' }} /> */}
      </div>
    </Content>
  );
}

export default Experiences;