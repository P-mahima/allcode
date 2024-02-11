import React from 'react'

const DisplyaFunc = (props) => {
  return (
    <div>
        <h1>{props.value.data}</h1>
      <button onClick={()=>props.value.setdata(props.value.data + 1)}>Plus</button>
      <button onClick={()=>props.value.setdata(props.value.data - 1)}>Minus</button>
        <button onClick={()=>props.value.setdata("Mahima")}>name</button>
    </div>
  )
}

export default DisplyaFunc
