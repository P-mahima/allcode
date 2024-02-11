import React, { useState } from 'react'
// useStatehook is alternative of useReducer and counterone.js file shows the counter application by using useState hook AND counterUseReducer.js shows the same counter application by useReducer hook.
const Counterone = () => {
    const [data, setdata] = useState(0)
  return (
    <div>
        <h1>Count:{data}</h1>
        <div>
            <button onClick={()=>setdata(data+1)}>Click+</button>
            <button onClick={()=>setdata(data-1)}>Click-</button>
        </div>
    </div>
  )
}

export default Counterone
