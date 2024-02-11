import React, { useState } from 'react'
import ItemTwo from './ItemTwo'
import ItemOne from './ItemOne'

const DisplayCompo = () => {
    const [data, setData] = useState(false)
  return (
    <div>
        <button onClick={() => setData(!data)}>Click</button>
        {data ? <ItemOne/> : <ItemTwo/>}
    </div>
  )
}

export default DisplayCompo