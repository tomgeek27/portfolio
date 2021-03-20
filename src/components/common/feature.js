import React from 'react'

function Feature(props) {
  return (
    <div class={`container ${props.containerClasses || ""}`} >
      <div class="flex-column vertical-center features p-top27">
        {props.title}
      </div>
      <div class="flex-column vertical-center cit p-top27">
        "{props.cit}"
      </div>
      <div class="flex-column vertical-center cit">
        - {props.author}
      </div>
      <div className={`m-top43 container p-bottom40 ${props.childrenClasses || ""}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Feature
