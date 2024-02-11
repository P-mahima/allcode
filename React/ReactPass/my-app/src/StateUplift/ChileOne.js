import React from 'react'

const ChileOne = (props) => {
  return (
    <div>
        <h1>Count2:{props.value.data}</h1>
        <button onClick={() => props.value.setData(props.value.data + 1)}>Click2</button>
      
    </div>
  )
}

export default ChileOne
