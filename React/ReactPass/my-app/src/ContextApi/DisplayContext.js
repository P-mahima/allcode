import React, { createContext, useState } from 'react'
import DemoContextOne from './DemoContextOne'
import DemoContextTwo from './DemoContextTwo'

export const Store = createContext()
const DisplayContext = () => {
    const[data, setData] = useState([1,2,3,4,5,6])

  return (
    <Store.Provider value={[data, setData]}>
        <DemoContextOne/>
        <DemoContextTwo/>

    </Store.Provider>
  )
}

export default DisplayContext