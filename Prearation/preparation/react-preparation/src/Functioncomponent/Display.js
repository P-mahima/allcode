import React, { useState } from 'react'
import FCompo from './FCompo'

const Display = () => {
    const [data, setdata] = useState(0)
  return (
    <div>
      <FCompo value = {{data, setdata}}/>
    </div>
  )
}

export default Display
