import React from 'react'
import Third from './Third'

const Second = (props) => {
  return (
    <div>
      <Third value={props.count} handleClick={props.FunCount}/>
    </div>
  )
}

export default Second
