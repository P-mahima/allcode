import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const [data, setData] = useState(0)
    const[value ,setValue] = useState(100)

    const Memo = useMemo(()=>{
        console.log('MEMO is Working')
    },[data])

  return (
    <div>
        {Memo}
      <h1>data:{data}</h1>
      <button onClick={() => setData(data+1)}>Click</button>
      <h1>Value:{value}</h1>
      <button onClick={() => setValue(value - 1)}>Click</button>
    </div>
  )
}

export default UseMemo
