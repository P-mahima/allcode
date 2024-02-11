import React, { useState } from 'react'
import StatechildOne from './StatechildOne'
import StatechildTwo from './StatechildTwo'

const SatateParent = () => {
    const [data, setData] = useState(0)
    const Add = () => {
        setData(data + 1)
    }
  return (
    <div>
        <StatechildOne  value = {data} btn={Add}/>
        <StatechildTwo  value = {data}  btn={Add}/>
    </div>
  )
}

export default SatateParent