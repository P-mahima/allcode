import React, { useContext } from 'react'
import { Store } from './MainDemo'

const DemoTwo = () => {
    const demotwo = useContext(Store)
  return (
    <div>
      demoTwo = {demotwo}
    </div>
  )
}

export default DemoTwo
