import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import location from '../assets/imgs/location.png'
import { Breakpoint } from 'react-socks';        

function Experiences(props) {
  return (
    <div>
      <Breakpoint xl down>
        <div class="margin50top" style={{ backgroundColor: 'white' }}>
          <div class="container no-jump-animated" >
            <div class="center-vertical features top27 bottom13">
              Experiences
            </div>
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
          </div>
        </div>
      </Breakpoint>
    </div>
  );
}

export default Experiences;