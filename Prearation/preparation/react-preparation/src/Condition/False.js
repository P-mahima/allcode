import React, { useState } from 'react'
import True from './True'

const False = () => {
    const [isToggle , setisToggle] = useState(true)
  return (
    <div>
        <button onClick={()=>setisToggle(!isToggle)}>Toggle</button>
        {/* {isToggle && <True/>} */}
        {isToggle ? <True/> : <h1>SignIn Sucessfully</h1>}
    </div>
  )
}

export default False