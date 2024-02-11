import React, { useState } from 'react'
import CondOne from './CondOne'
import CondTwo from './CondTwo'

const DisplayCond = () => {
    const [data, setData] = useState(true)
  return (
    <div>
        <button onClick={() => setData(!data)}>ConRen</button>
        {data ? <CondOne/> : <CondTwo/>}
    </div>
  )
}

export default DisplayCond