import React from 'react'

const C = (props) => {
  return (
    <div>
        <h2>Count:{props.value1}</h2>
        <button onClick={props.btn1}>Click</button>
    </div>
  )
}

export default C