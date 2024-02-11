import React from 'react'
import Three from './Three'

const Two = (props) => {
  return (
    <div>Two
        <Three value= {props.data} Counter = {props.Click} />
    </div>
  )
}

export default Two