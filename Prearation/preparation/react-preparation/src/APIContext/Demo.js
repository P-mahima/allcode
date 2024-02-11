import React, { useContext } from 'react'
import { Store } from './DisplayCompo'

const Demo = () => {
    const count = useContext(Store)
  return (
    <div>
      <h1>Count:{count}</h1>
    </div>
  )
}

export default Demo
