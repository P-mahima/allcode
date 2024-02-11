//useEffect hook is used to perform side effects. side effects such as suscription, fetching Api.
//useEffect has one arrowfunction and dependency of array.



import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [data, setData] = useState(0)
    useEffect(() => {
        console.log('Hello Its useEffect hook😎')
    })
  return (
    <div>
        <h1>Count:{data}</h1>
        <button onClick={()=> setData(data + 1)}>Click</button>
      
    </div>
  )
}

export default UseEffect
