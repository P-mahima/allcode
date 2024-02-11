import React from 'react'
import HOCParent from './HOCParent'

const HOCChildOne = (props) => {
  return (
    <div>
      <h1>Count1:{props.value}</h1>
      <button onClick={props.Btn}>Click</button>
    </div>
  )
}

export default HOCParent(HOCChildOne)
