import React, { useState } from 'react'
import ChildCompo from './ChildCompo'

const MainCompo = () => {
    const [data, setData] = useState(0)
    const HandleClick = () => {
        setData(data + 1)
    }
  return (
    <div>
      <h1>Count:{data}</h1>
      <ChildCompo HandleClick={HandleClick}/>
    </div>
  )
}

export default MainCompo
