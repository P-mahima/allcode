import React from 'react'

const StatechildTwo = (props) => {
  return (
    <div>
        <h1>Count2:{props.value}</h1>
        <button onClick={props.btn}>Click</button>
    </div>
  )
}

export default StatechildTwo