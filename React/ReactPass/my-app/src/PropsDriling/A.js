import React, { useState } from 'react'
import B from './B'

const A = () => {
    const [data, setData] = useState(0)
  
  return (
    <div>
      <B value={data} btn={setData} />
    </div>
  )
}

export default A
