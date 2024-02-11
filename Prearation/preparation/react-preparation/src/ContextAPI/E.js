import React, { useContext } from 'react'
import { Store } from './A'

const E = () => {
    const CreateData = useContext(Store)
  console.log(CreateData.Data2)
    return (
    <div>E
        {/* <h1>{CreateData.Data2}</h1> */}
    </div>
  )
}

export default E