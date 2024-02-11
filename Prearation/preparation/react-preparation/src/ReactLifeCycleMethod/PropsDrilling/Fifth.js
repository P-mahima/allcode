import React from 'react'

const Fifth = (props) => {
  return (
    <div>
      <h1>Count Props Drilling : {props.value2}</h1>
      <button onClick={props.click1}>OK Now Click Here</button>
    </div>
  )
}

export default Fifth
