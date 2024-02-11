import React, { useContext } from 'react'
import { Store } from './DisplayCompo'

const Demo2 = () => {
    const Demo = useContext(Store)
  return (
    <div>
      <h1>Store:{Demo}</h1>
    </div>
  )
}

export default Demo2
