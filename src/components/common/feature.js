import React from 'react'
import { useSelector } from 'react-redux'
import {getTranslated} from '../../helper/translater'

function Feature(props) {

  const lang = useSelector(state => state.languageReducer)

  return (
    <div className={`container ${props.containerClasses || ""}`} >
      <div className="flex-column vertical-center features p-top27">
        {getTranslated(props.title)}
      </div>
      <div className="flex-column vertical-center cit p-top27" style={{margin: '0px 20%'}}>
        "{getTranslated(props.cit)}"
      </div>
      <div className="flex-column vertical-center cit">
        - {getTranslated(props.author)}
      </div>
      <div className={`m-top43 container p-bottom40 ${props.childrenClasses || ""}`}>
        {getTranslated(props.children)}
      </div>
    </div>
  )
}

export default Feature
