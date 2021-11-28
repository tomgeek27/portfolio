import React, {useEffect} from 'react'
import Feature from './common/feature'
import { pl, tools } from '../constants'
import { getTranslated } from '../helper/translater';
import AOS from 'aos'
import "aos/dist/aos.css";

function Skills() {

  return (
    <Feature 
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
    </Feature>
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
    <div>
      <div className="exp-title">
        {getTranslated(props.skill)}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 20px 60px' }}>
        <div 
              //data-aos="fade-right"
        
        className="row" style={{ width: '100%' }}>
          {skills.map((s, i) => (
            <div  
              key={i}
              className="col-sm-12 col-md-6">
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
    </div>
  )
}

export default Skills
