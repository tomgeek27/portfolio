import React from 'react'
import Feature from './common/feature'
import {pl, tools} from '../constants/skills_list'
import { Breakpoint } from 'react-socks';
const _ = require("lodash");             

function Skills() {

  return (
    <Feature title="Skills" cit="Good programmers know what to write. Great ones know what to rewrite" author="Eric S. Raymond">
      <Breakpoint m up>
        <Skill skill={"Programming Languages & Frameworks"} skill_list={pl} cols={2}/>
        <Skill skill={"Tools"} skill_list={tools} cols={2}/>
      </Breakpoint>
      <Breakpoint s down>
        <Skill skill={"Programming Languages & Frameworks"} skill_list={pl} cols={1}/>
        <Skill skill={"Tools"} skill_list={tools} cols={1}/>
      </Breakpoint>
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
      <div style={{display:'flex', justifyContent: 'center', margin: '40px 20px 60px'}}>
        <div style={{display:'flex', justifyContent: 'center', width: '650px'}}>
          {_.times(props.cols, i => {
            var s = props.skill_list;
            if(props.cols != 1) {
              s = i === 0 ? props.skill_list.slice(0, props.skill_list.length / 2) : props.skill_list.slice(props.skill_list.length / 2)
            }
            return (<div style={{flex:1, margin: `0px 5px`}}>
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
          })}
        </div>
      </div>
    </div>
  )
}

export default Skills
