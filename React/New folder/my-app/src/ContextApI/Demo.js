import React, { useContext } from 'react'
import { Store } from './Main'

const Demo = () => {
    const value = useContext(Store)
  return (
    <div>
      <h1>DataTwo:{value}</h1>
    </div>
  )
}

export default Demo
