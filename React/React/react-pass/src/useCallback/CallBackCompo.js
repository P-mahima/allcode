import React, { useCallback, useState } from 'react'
import ChildCompon from './ChildCompon'

const CallBackCompo = () => {
    const[data, setData] = useState(0)
    const[value, setValue] = useState(0)

    const Add = useCallback(() => {
        setValue(value + 1)
        console.log('useCallBAck Hook')
    },[value])
  return (
    <div>
        <h1>Count: {data}</h1>
        <button onClick={() => setData(data+1)}>Click</button>
        <h1>Value:{value}</h1>
        <ChildCompon Add= {Add}/>
    </div>
  )
}

export default CallBackCompo
