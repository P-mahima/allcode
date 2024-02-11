import React, { useState } from 'react'
import ChileOne from './ChileOne'
import ChildTwo from './ChildTwo'

const Preentstate = () => {
    const [data, setData] = useState(0)
  return (
    <div>
      <ChileOne value={{data, setData}}/>
      <ChildTwo value={{data, setData}}/>
    </div>
  )
}

export default Preentstate
