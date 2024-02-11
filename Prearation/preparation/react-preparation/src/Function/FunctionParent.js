import React, { useState } from 'react'
import FunctionChild from './FunctionChild'

const FunctionParent = () => {
    const [data, setdata] = useState(0)
  return (
    <div>FunctionParent
        <FunctionChild value = {{data, setdata}} />
    </div>
  )
}

export default FunctionParent