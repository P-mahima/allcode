import React, { useState } from 'react'
import DemoOne from './DemoOne'
import DemoTwo from './DemoTwo'

const Display = () => {
    const[data, setData] = useState(false)
  return (
    <div>
      <button onClick={()=> setData(!data)}>Click</button>
      {data ? <DemoOne/> : <DemoTwo/>}
    </div>
  )
}

export default Display
