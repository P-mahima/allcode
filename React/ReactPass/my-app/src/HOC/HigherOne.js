import React from 'react'
import HigherParent from './HigherParent'

const HigherOne = (props) => {
  return (
    <div>
      <h1>Count:{props.value.data}</h1>
      <button onClick={()=> props.value.setData(props.value.data + 1)}>ClickOne</button>
    </div>
  )
}

export default HigherParent(HigherOne)
