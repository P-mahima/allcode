import React from 'react'

const C = (props) => {
  return (
    <div>
      <h1>Count:{props.value1}</h1>
      <button onClick={props.btn1}>Click</button>
    </div>
  )
}

export default C
