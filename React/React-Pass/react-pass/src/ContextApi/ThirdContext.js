import React, { useContext } from 'react'
import { Store } from './MainContext'

const ThirdContext = () => {
    const [UseContext] = useContext(Store)
    // console.log(UseContext.data1)
  return (
    <div>
    <h2>Third: {UseContext}</h2>
    </div>
  )
}

export default ThirdContext