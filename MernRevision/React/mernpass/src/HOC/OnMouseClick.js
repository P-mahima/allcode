import React from 'react'
import MainHOC from './MainHOC'

const OnMouseClick = (props) => {
  return (
    <div>
      <h2>Count:{props.data}</h2>
      <button onClick= {props.HandleClick}>Click</button>
    </div>
  )
}

export default MainHOC(OnMouseClick)
