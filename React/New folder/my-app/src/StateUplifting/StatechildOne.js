import React from 'react'

const StatechildOne = (props) => {
  return (
    <div>
        <h1>Count1:{props.value}</h1>
        <button onClick={props.btn}>Click</button>
    </div>
  )
}

export default StatechildOne