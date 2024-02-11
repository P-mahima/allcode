import React, { useContext } from 'react'
import { Store } from './DisplayContext'

const DemoContextOne = () => {
    const data = useContext(Store)
  return (
    <div>DemoContextOne:{data}</div>
  )
}

export default DemoContextOne