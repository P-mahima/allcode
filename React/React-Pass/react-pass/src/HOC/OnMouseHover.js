import React from 'react'
import Main from './Main'

const OnMouseHover = (props) => {
  return (
    <div>
        <h2>Count:{props.value}</h2>
        <button onMouseOver={props.HandleClick}>Hover</button>
    </div>
  )
}

export default Main(OnMouseHover)