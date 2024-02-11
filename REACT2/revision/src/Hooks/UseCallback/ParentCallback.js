import React, { useState } from 'react'

const ParentCallback = () => {
    const [data, setData] = useState(0)
    const [value , setValue] = useState(100)

    const Learning = () =>{
        setValue(value - 1)
    }
  return (
    <div>
      <h1>Count:{data}</h1>
      <button onClick={() => setData(data + 1)}>Click</button>
      <h1>Value:{value}</h1>
      <button onClick={Learning}>Click</button>
    </div>
  )
}

export default ParentCallback
