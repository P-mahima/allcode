import React from 'react'
import MainCompo from './MainCompo'

const CLick = (props) => {
  return (
    <div>
      <h1>Click Count:{props.Data}</h1>
      <button onClick={props.ClickHandle}>OnClick</button>
    </div>
  )
}

export default MainCompo(CLick)
