import React, { useContext } from 'react'
import { Store } from './MainContext'

const SecondContext = () => {
    const [USeContext] = useContext(Store)
    // console.log(USeContext.data)
  return (
    <div>
    <h2>Second: {USeContext}</h2>
    </div>
  )
}

export default SecondContext