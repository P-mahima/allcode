import React from 'react'

const Two = (props) => {
  return (
    <div>
      <h1>Value : {props.value.data}</h1>
      <button onClick={()=> props.value.setData(props.value.data + 1)}>Click</button>
    </div>
  )
}

export default Two
