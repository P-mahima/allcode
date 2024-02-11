import React from 'react'
import Main from './Main'

const OnClick = (props) => {
  return (
    <div>
      <h2>Count:{props.value}</h2>
      <button onClick={props.HandleClick}>Click</button>
    </div>
  )
}

export default Main(OnClick)