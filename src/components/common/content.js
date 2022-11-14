import React from 'react'
import {getTranslated} from '../../helper/translater'

function Content(props) {

  return (
    <div className={`content-container ${props.containerClasses || ""}`} >
      <div className="flex-column vertical-center content-title">
        {getTranslated(props.title)}
      </div>
      <div className="flex-column vertical-center content-cit p-top27" style={{margin: '0px 20%'}}>
        "{getTranslated(props.cit)}"
        {<br></br>}
        {<br></br>}
        - {getTranslated(props.author)}
      </div>
      <div className={`content-child-container width-sized ${props.childrenClasses || ""}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Content
