import React from 'react'
import MainFunction from './MainFunction'

const ONMOUSEHover = (props) => {
  return (
    <div>
        <h1>Count:{props.data}</h1>
        <button onMouseOver={props.Handleclick}>ONMOUSEHover</button>
    </div>
  )
}

export default MainFunction(ONMOUSEHover)