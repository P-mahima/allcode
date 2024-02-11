import React, { useState } from 'react'
import Childcompo from './Childcompo'

const Parentcompo = () => {
    const [name , setname] = useState('')
    const SetData = (data) => {
        console.log('here is the parent compo' , data)
        setname(data)
    }
   
  return (
    <div>
      <h1>{name}</h1>
      <Childcompo SetData={SetData}/>
    </div>
  )
}

export default Parentcompo
