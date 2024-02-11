import React from 'react'
import HOCParent from './HOCParent'

const HOCChildTwo = (props) => {
  return (
    <div>
      <h1>Count2:{props.value}</h1>
      <button onMouseOver={props.Btn}>Hover</button>
    </div>
  )
}

export default HOCParent(HOCChildTwo)
