import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState(0)
    useEffect(()=>{
        console.log('This is UseEffect hook')
    },[data])
  return (
    <div>
      <h1>Count:{data}</h1>
      <button onClick={()=> setData(data+1)}>Click</button>
    </div>
  )
}

export default UseEffect
