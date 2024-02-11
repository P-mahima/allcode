import React from 'react'

const FCompo = (props) => {
  return (
    <div>
      <h1>Count :{props.value.data}</h1>
      <button onClick={()=> props.value.setdata(props.value.data + 1)}>click</button>
    </div>
  )
}

export default FCompo
