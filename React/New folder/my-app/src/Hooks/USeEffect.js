import React, { useEffect, useState } from 'react'

const USeEffect = () => {
    const [data,setData] = useState(0)
    useEffect(() => {
        console.log('UseEffect Hook')
    })
  return (
    <div>
        <h1>Count : {data}</h1>
        <button onClick={()=> setData(data + 1)}>onClick</button>
    </div>
  )
}

export default USeEffect