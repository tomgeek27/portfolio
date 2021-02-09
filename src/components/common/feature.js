import React from 'react'

function Feature(props) {
  return (
    <div class="container" style={props.headerContainerStyle}>
      <div class="flex-column center-vertical features top27">
        {props.title}
      </div>
      <div class="flex-column center-vertical cit top27">
        "{props.cit}"
      </div>
      <div class="flex-column center-vertical cit">
        - {props.author}
      </div>
      <div className={`top43 container bottom40 ${props.c}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Feature
