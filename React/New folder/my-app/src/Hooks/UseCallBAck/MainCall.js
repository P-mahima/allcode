import React, { useCallback, useState } from 'react'
import Call from './Call'

const MainCall = () => {
    const [data, setData] = useState(0)
    const [value, setValue] = useState(100)

    const Add = useCallback(()=>{
        setValue(value - 1)
    },[value])
  return (
    <div>
      <h1>Count:{data}</h1>
      <button onClick={() => setData(data+1)}>Click</button>
      <h1>Value: {value}</h1>
      <Call btn={Add} />
    </div>
  )
}

export default MainCall
