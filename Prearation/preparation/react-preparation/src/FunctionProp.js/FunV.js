import React, { useState } from 'react'
import DisplyaFunc from './DisplyaFunc'

const FunV = () => {
    const [data, setdata] =useState(0)
  return (
    <div>
        <DisplyaFunc value = {{data, setdata}} />
      {/* <h1>value={{data, setdata}}</h1> */}
    </div>
  )
}

export default FunV
