import React from 'react'

const E = (props) => {
  return (
    <div>
        <h1>Count:{props.value3}</h1>
        <button onClick={()=> props.btn3(props.value3 + 1)}>Click</button>
    </div>
  )
}

export default E