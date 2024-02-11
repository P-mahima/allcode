import React, { useContext } from 'react'
import { Store } from './Data'

const Food = () => {
    const valueOne = useContext(Store)
  return (
    <div>
      <h1>Food:{valueOne}</h1>
    </div>
  )
}

export default Food
