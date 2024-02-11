import React from 'react'
import MainFunction from './MainFunction'

const ONMouseClick = (props) => {
  return (
    <div>
      <h1>Count : {props.data}</h1>
      <button onClick={props.Handleclick}>OnClick</button>
    </div>
  )
}

export default MainFunction(ONMouseClick)
