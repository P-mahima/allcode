import React, { useState } from 'react'
import SignIn from './SignIn'


const Condition = () => {
    const[data , setdata] = useState(false)
  return(
    <div>
        <button onClick={()=> setdata(!data)}>Toggle</button>
        {/* {data && <SignIn/>} */}
        {data ? <SignIn/> : <h1>Please LoggedIn :)</h1>}
    </div>
  )
 
}

export default Condition