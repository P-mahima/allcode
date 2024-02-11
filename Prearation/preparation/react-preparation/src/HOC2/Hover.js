import React from 'react'
import MainCompo from './MainCompo'

const Hover = (props) => {
  return (
    <div>
      <h1>onMouseOver Counter:{props.Data}</h1>
      <button onMouseOver={props.ClickHandle}>onMouseOver</button>
    </div>
  )
}

export default MainCompo(Hover)
