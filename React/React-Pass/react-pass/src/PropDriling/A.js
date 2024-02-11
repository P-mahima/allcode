import React, { useState } from 'react'
import B from './B'

const A = () => {
    const [data, setData] = useState(0)

    const HandleClick = () => {
        setData(data+1)
    }
  return (
    <div>
        <B value = {data} btn = {HandleClick}/>
    </div>
  )
}

export default A