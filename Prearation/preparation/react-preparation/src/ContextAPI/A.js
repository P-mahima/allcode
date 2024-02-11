import React, { createContext, useState } from 'react'
import B from './B'
import E from './E'

export const Store = createContext()

const A = () => {
    const[Data, setData] = useState('Hello I am One')
    const[Data1, setData1] = useState('Hello I am One')
    const[Data2, setData2] = useState('Hello I am One')
  return (
    <div>
        <Store.Provider value={[Data, Data1, Data2 , setData,setData1, setData2] }>
        <div>
            <B/>
            <E/>
        </div>
        </Store.Provider>


    </div>
  )
}

export default A