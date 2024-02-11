import React from 'react'

const Three = (props) => {
  return (
    <div>Three
        <h1>{props.value}</h1>
        <button onClick={props.Counter}>OK CLICK</button>
    </div>
  )
}

export default Three