import React, { createContext, useState } from 'react'
import Demo from './Demo'
import Demo2 from './Demo2'

export const Store = createContext()

const DisplayCompo = () => {
    const [data, setdata] = useState([1,2,3,4,5,6])
   
  return (
    <div>
        <Store.Provider value={[data, setdata]}>
        <Demo/>
        <Demo2/>
        </Store.Provider>
      
    </div>
  )
}

export default DisplayCompo
