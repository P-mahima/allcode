import React, { useState } from 'react'
import ChildFunc from './ChildFunc'

const ParentFunc = () => {
    const [data, setData] = useState(0)
  return (
    <div>
        <ChildFunc value={{data, setData}} />
    </div>
  )
}

export default ParentFunc