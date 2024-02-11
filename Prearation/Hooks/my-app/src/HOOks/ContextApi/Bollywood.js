import React, { useContext } from 'react'
import { Store } from './Data'

const Bollywood = () => {
    const value = useContext(Store)
  return (
    <div>
      <h1>Bollywood:{value}</h1>
    </div>
  )
}

export default Bollywood
