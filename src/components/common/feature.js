import React from 'react'

function Feature(props) {
  return (
    <div className={`container ${props.containerClasses || ""}`} >
      <div className="flex-column vertical-center features p-top27">
        {props.title}
      </div>
      <div className="flex-column vertical-center cit p-top27" style={{margin: '0px 20%'}}>
        "{props.cit}"
      </div>
      <div className="flex-column vertical-center cit">
        - {props.author}
      </div>
      <div className={`m-top43 container p-bottom40 ${props.childrenClasses || ""}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Feature
