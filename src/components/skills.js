import React, {useEffect} from 'react'
import Content from './common/content'
import { pl, tools } from '../constants'
import { getTranslated } from '../helper/translater';
import AOS from 'aos'
import "aos/dist/aos.css";

function Skills() {

  return (
    <Content 
      title={"Skills"} 
      cit={"Good programmers know what to write. Great ones know what to rewrite"}
      author={"Eric S. Raymond"}
    >
      <Skill 
        skill={{
          it: "Linguaggi di programmazione & Frameworks",
          en: "Programming Languages & Frameworks"
        }} 
        skill_list={pl} 
      />
      <Skill 
        skill={{
          it: "Sistemi informatici",
          en: "Tools & Systems"
        }} 
        skill_list={tools} 
      />
    </Content>
  )
}

function Point(props) {
  return (
    <div 
    data-aos="fade-zoom-in"
    data-aos-duration={props.delay}
    className={`point ${props.in ? 'point-in' : 'point-out'}`} />
  )
}



function displayPoints(n, delay, pointIn=true) {

  const calcDelay = (i) => (i * 150) + delay

  return [...Array(n).keys()]
    .map((k) => 
      {
        let delay_ = pointIn ? calcDelay(k) : calcDelay(k + (5 - n))
        console.log(pointIn, delay_, k)
        return pointIn ? <Point in delay={delay_}/> : <Point in={false} delay={delay_}/>}
    )
      
}

function Skill(props) {

  useEffect(() => {
    AOS.init({})
  })

  var skill_left = props.skill_list.slice(0, (props.skill_list.length + 1) / 2)
  var skill_right = props.skill_list.slice((props.skill_list.length + 1) / 2)

  var skills = [skill_left, skill_right]

  return (
    <div className="flex-column width-sized-margined" style={{justifyContent: 'flex-start'}}>
      <div className="exp-title">
        {getTranslated(props.skill)}
      </div>
      <div className="skill-list-main-container" 
      style={{flexWrap: 'wrap', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}
      >
        {skills.map((s, i) => (
          <div  
            key={i}
            className="skill-list-container"
            >
            {s.map((e, i) => {
              return (
                <div key={i} className="flex-row horizontal-center record-skill">
                  <div className="skill">
                    {e.title}
                  </div>
                  <div className="flex-row">
                    {
                      displayPoints(e.value, 100)
                    }
                    {
                      displayPoints(5 - e.value, 100, false)
                    }
                  </div>
                </div>
              )
            })}
          </div>)
        )}
      </div>
    </div>
  )
}

export default Skills
