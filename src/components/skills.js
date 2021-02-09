import React from 'react'
import Feature from './common/feature'
import {pl, tools} from '../constants/skills_list'
const _ = require("lodash");             

function Skills() {

  var pl_left = pl.slice(0, pl.length / 2)
  var pl_right = pl.slice(pl.length / 2)

  var tools_left = tools.slice(0, tools.length / 2)
  var tools_right = tools.slice(tools.length / 2)

  return (
    <Feature title="Skills" cit="Good programmers know what to write. Great ones know what to rewrite" author="Eric S. Raymond">
      <Skill skill={"Programming Languages & Frameworks"} right={pl_right} left={pl_left}/>
      <Skill skill={"Tools"} right={tools_right} left={tools_left}/>
    </Feature>
  )
}

function Point(props) {
  return (
    <div className={`point ${props.in ? 'point-in' : 'point-out'}`}/>
  )
}

function PointIn() {
  return (
    <Point in/>
  )
}

function PointOut() {
  return (
    <Point in={false} />
  )
}

function Skill(props) {
  return (
    <div>
      <div class="exp-title">
      {props.skill}
      </div>
      <div style={{display:'flex', justifyContent: 'center', margin: '25px 10% 0px'}}>
        {_.times(2, i => {
          var s = i === 0 ? props.left : props.right
          return (<div style={{flex:1, margin: `0px 3% ${i === 0 ? '40px' : '0px'}`}}>
              {s.map(e => {
                return (
                  <div className="flex-row horizontal-center" style={{justifyContent: 'space-between'}}>
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
        })}
      </div>
    </div>
  )
}

export default Skills
