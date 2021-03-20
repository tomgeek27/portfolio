import React from 'react'
import Feature from './common/feature'
import { pl, tools } from '../constants'
const _ = require("lodash");

function Skills() {

  return (
    <Feature title="Skills" cit="Good programmers know what to write. Great ones know what to rewrite" author="Eric S. Raymond">
      <Skill skill={"Programming Languages & Frameworks"} skill_list={pl} />
      <Skill skill={"Tools & Systems"} skill_list={tools} />
    </Feature>
  )
}

function Point(props) {
  return (
    <div className={`point ${props.in ? 'point-in' : 'point-out'}`} />
  )
}

function PointIn() {
  return (
    <Point in />
  )
}

function PointOut() {
  return (
    <Point in={false} />
  )
}

function Skill(props) {

  var skill_left = props.skill_list.slice(0, (props.skill_list.length + 1) / 2)
  var skill_right = props.skill_list.slice((props.skill_list.length + 1) / 2)

  var skills = [skill_left, skill_right]

  return (
    <div>
      <div class="exp-title">
        {props.skill}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 20px 60px' }}>
        <div className="row" style={{ width: '100%' }}>
          {skills.map(s => (
            <div className="col-sm-12 col-md-6">
              {s.map(e => {
                return (
                  <div className="flex-row horizontal-center record-skill">
                    <div className="skill">
                      {e.title}
                    </div>
                    <div class="flex-row">
                      {
                        _.times(e.value, i_ => {
                          return (<PointIn />)
                        })
                      }
                      {
                        _.times(5 - e.value, i_ => {
                          return <PointOut />
                        })
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
