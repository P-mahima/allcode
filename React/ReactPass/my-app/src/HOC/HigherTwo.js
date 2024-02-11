import React from 'react'
import HigherParent from './HigherParent'

const HigherTwo = (props) => {
  return (
    <div>
      <h1>Count:{props.value.data}</h1>
      <button onClick={() => props.value.setData(props.value.data -1)}>ClickTwo</button>
    </div>
  )
}

export default HigherParent(HigherTwo)
