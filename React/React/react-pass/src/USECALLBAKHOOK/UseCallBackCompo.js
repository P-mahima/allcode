import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const UseCallBackCompo = () => {
    const [data, setData] = useState(0)
    const [value, setValue] = useState(0)

    const Data = useCallback(() => {
        setValue(value + 1)
    },[value])
  return (
    <div>
        <h1>Count: {data}</h1>
        <button onClick={()=> setData(data + 1)}>Click</button>
        <h1>Value: {value}</h1>
        <ChildComponent Data={Data} />
      
    </div>
  )
}

export default UseCallBackCompo
