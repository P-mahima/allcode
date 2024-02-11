import React, { useState } from 'react'
import R from './R'

const UseCallback = () => {
    const [data, setData] = useState(0)
    const [value, setValue] = useState(100)
    const HandleClick = () =>{
        setValue(value - 1)
    }
  return (
    <div>
        <h2>data:{data}</h2>
        <button onClick={() => setData(data + 1)}>Click</button>
        <h2>value:{value}</h2>
        <R HandleClick={HandleClick}/>

    </div>
  )
}

export default UseCallback