import React, { useState } from 'react'
import DemoS from './DemoS'
import DemoF from './DemoF'

const Display = () => {
    const [data, setData] =useState(false)
  return (
    <div>
        <button onClick={()=> setData(!data)}>CLick</button>
        {data ? <DemoS/> : <DemoF/>}

    </div>
  )
}

export default Display