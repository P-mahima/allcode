import React, { useContext } from 'react'
import { Store } from './DisplayContext'

const DemoContextTwo = () => {
    const data2= useContext(Store)
  return (
    <div>DemoContextTwo:{data2}</div>
  )
}

export default DemoContextTwo