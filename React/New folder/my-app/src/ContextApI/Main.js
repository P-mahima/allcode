import React, { createContext, useState } from 'react'
import Demo from './Demo'
import DemoT from './DemoT'


export const Store = createContext()
const Main = () => {
    const [data, setData] = useState([1, 2, 3, 4, 5, 6])
    return (
        <div>
            <Store.Provider value={[data, setData]}>
                <Demo />
                <DemoT />
            </Store.Provider>
        </div>
    )
}

export default Main
