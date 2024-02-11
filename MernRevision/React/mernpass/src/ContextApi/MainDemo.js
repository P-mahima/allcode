import React, { createContext, useState } from 'react'
import DemoOne from './DemoOne'
import DemoTwo from './DemoTwo'
export const Store = createContext()
const MainDemo = () => {
    const [demo , setDemo] = useState([1,2,3,4,5,6])
  return (
    <Store.Provider value={[demo, setDemo]}>
      <DemoOne/>
      <DemoTwo/>
    </Store.Provider>
  )
}

export default MainDemo
