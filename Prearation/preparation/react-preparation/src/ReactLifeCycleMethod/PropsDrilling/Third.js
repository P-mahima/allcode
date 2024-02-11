import React from 'react'
import Four from './Four'

const Third = (props) => {
  return (
    <div>
      <Four value1={props.value} Clickfunction={props.handleClick}/>
    </div>
  )
}

export default Third
