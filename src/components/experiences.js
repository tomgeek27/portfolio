import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import location from '../assets/imgs/location.png'
import Feature from './common/feature';

function Experiences(props) {
  return (
    <Feature c={"no-jump-animated"}>
        <div class="exp-title">
          Education
        </div>
        <VerticalTimeline layout="1-column-left" className="custom-line">
          {
            props.educations.map(x => 
              <VerticalTimelineElement
                className="custom-icon custom-container"
                date={x.date}
              >
                <h3 class="exp-title-element">{x.title}</h3>
                <div class="flex-row">
                  <img id="location" src={location}/>
                  <div class="exp-location-element">{x.location}</div>
                </div>
                <div class="exp-description-element">{x.description}</div>
              </VerticalTimelineElement>
            )
          }
        </VerticalTimeline>
        <div class="exp-title">
          Career
        </div>
        <VerticalTimeline layout="1-column-left" className="custom-line">
          {
            props.career.map(x => 
              <VerticalTimelineElement
                className="custom-icon custom-container"
                date={x.date}
              >
                <h3 class="exp-title-element">{x.title}</h3>
                <div class="flex-row">
                  <img id="location" src={location}/>
                  <div class="exp-location-element">{x.location}</div>
                </div>
                <div class="exp-description-element">{x.description}</div>
              </VerticalTimelineElement>
            )
          }
        </VerticalTimeline>
        <div style={{minHeight: '150px'}}/>
    </Feature>
    // <div class="margin50top">
    //   <div class="container no-jump-animated" >
    //     <div class="center-vertical features top27 bottom13">
    //       Experiences
    //     </div>
    //     <div class="flex-column center-vertical cit top27">
    //       "Good programmers know what to write. Great ones know what to rewrite" 
    //     </div>
    //     <div class="flex-column center-vertical cit">
    //       - Eric S. Raymond
    //     </div>

    //   </div>
    // </div>
  );
}

export default Experiences;