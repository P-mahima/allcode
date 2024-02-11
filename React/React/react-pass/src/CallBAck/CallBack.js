import React, { useCallback, useState } from 'react'
import ChildCompo from './ChildCompo'

const CallBack = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(0)

    const Learning = useCallback(() => {
        setValue(value + 1)
    },[value])
  return (
    <div>
      <h1>Count:{count}</h1>
      <h2>Value:{value}</h2>
      <button onClick={()=> setCount(count + 1)}>Click</button>
        <ChildCompo Learning= {Learning}/>
    </div>
  )
}

export default CallBack
