import React, { useContext } from 'react'
import { Store } from './A'

const B = () => {
    const dataCreate = useContext(Store)
    console.log(dataCreate.Data1)
  return (
    <div>B
        {/* <h1>{dataCreate.Data1}</h1> */}
    </div>
  )
}

export default B