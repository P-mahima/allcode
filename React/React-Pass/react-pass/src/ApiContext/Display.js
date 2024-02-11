import React, { createContext, useState } from 'react'
import Demo from './Demo'


const Store = createContext()
const Display = () => {
    const [data, setData] = useState(
        [1,2,3,4,5,6]
    )
  return (
    <div>
        <Store.Provider value={[data, setData]}>
            <Demo/>
        </Store.Provider>
    </div>
  )
}

export default Display