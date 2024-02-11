import React, { createContext, useState } from 'react'
import SecondContext from './SecondContext'
import ThirdContext from './ThirdContext'

export const Store = createContext()

const MainContext = () => {

    const [data, setData] =useState(
        [1,2,3,4,5,6]
    )
   
  return (
    <div>
        <Store.Provider value={[data, setData]}>
            <SecondContext/>
            <ThirdContext/>
        </Store.Provider>
    </div>
  )
}

export default MainContext