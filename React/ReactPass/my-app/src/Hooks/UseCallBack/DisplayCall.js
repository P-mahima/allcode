import React, { useState } from 'react'
import DemoCall from './DemoCall'

const DisplayCall = () => {
    const [data, setData] = useState(0)
    const [value, setValue] = useState(100)
    const HandleClick = () => {
        setValue(value - 1)
    }
  return (
    <div>
      <h1>Data:{data}</h1>
      <button onClick={() => setData(data+1)}>Click</button>
      <h1>Value:{value}</h1>
      <DemoCall HandleClick={HandleClick}/>
    </div>
  )
}

export default DisplayCall
