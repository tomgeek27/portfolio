import React from 'react'

function Feature(props) {
  return (
    <div class={`container ${props.containerClasses || ""}`} >
      <div class="flex-column center-vertical features top27">
        {props.title}
      </div>
      <div class="flex-column center-vertical cit top27">
        "{props.cit}"
      </div>
      <div class="flex-column center-vertical cit">
        - {props.author}
      </div>
      <div className={`top43 container bottom40 ${props.childrenClasses || ""}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Feature
