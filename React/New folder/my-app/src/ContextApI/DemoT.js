import React, { useContext } from 'react'
import { Store } from './Main'

const DemoT = () => {
    const data = useContext(Store)
  return (
    <h1>Data: {data}</h1>
  )
}

export default DemoT