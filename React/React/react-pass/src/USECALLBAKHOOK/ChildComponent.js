import React from 'react'

const ChildComponent = ({Data}) => {
  return (
    <div>
        <button onClick={Data}>Value</button>
    </div>
  )
}

export default ChildComponent