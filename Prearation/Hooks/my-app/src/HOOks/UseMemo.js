import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[data, setData] =useState(0)
    const [value, setValue] = useState(0)

    const Memo = useMemo(()=>{
        console.log('Usememo Hook')
    },[value])
  return (
    <div>
        {Memo}
        <h1>{data}</h1>
        <button onClick={() => setData(data +1)}>Click</button>
        <h1>{value}</h1>
        <button onClick={() => setValue(value+1)}>Click</button>
    </div>
  )
}

export default UseMemo