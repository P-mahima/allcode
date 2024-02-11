import React, { useState } from 'react'
import One from './One'
import Two from './Two'

const Parent = () => {
    const[data, setData] = useState(0)
  return (
    <div>
      <One value = {{data, setData}}/>
      <Two value = {{data, setData}}/>
    </div>
  )
}

export default Parent
