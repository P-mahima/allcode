import React, { createContext, useState } from 'react'
import Bollywood from './Bollywood'
import Food from './Food'

export const Store = createContext()
const Data = () => {
    const [Data, setData] = useState([1,2,3,4,5,6])
  return (
    <Store.Provider value={[Data, setData]}>
        <Bollywood/>
        <Food/>
      
    </Store.Provider>
  )
}

export default Data
