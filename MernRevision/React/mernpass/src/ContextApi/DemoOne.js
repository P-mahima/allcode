import React, { useContext } from 'react'
import { Store } from './MainDemo'

const DemoOne = () => {
    const demoone = useContext(Store)
  return (
    <div>
        demoone = {demoone}
    </div>
  )
}

export default DemoOne