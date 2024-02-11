import React from 'react'
import MainHOC from './MainHOC'

const OnMouseOver = (props) => {
  return (
    <div>
      <h2>COunt:{props.data}</h2>
      <button onMouseOver= {props.HandleClick}>Click</button>
    </div>
  )
}

export default MainHOC(OnMouseOver)
