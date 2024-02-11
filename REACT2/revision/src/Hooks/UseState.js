
//useState hook is used update any intial state  


import React, { useState } from 'react'

const UseState = () => {
    const [data, setData] = useState(0)
  return (
    <div>
      <h1>Count:{data}</h1>
      <button onClick={()=> setData(data + 1)}>Click</button>
    </div>
  )
}

export default UseState
