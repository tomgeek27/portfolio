import React from 'react'

function SocialButton(props) {
  return (
    <a href={props.url} target="_blank">
      <img src={props.src} className="social-icon"/>
    </a>
  )
}

export default SocialButton

