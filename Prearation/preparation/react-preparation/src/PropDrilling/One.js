import React, { useEffect, useState } from 'react'
import Two from './Two'

const One = () => {
    const[data , setdata] = useState(0)
   const Click = () =>{
    setdata(data+1)
   }
  return (
    <div>One
        <Two data= {data} Click = {Click}/>
    </div>
  )
}

export default One



//props driling if there are 3 compo then 
// data flow from one ---> two ---> three
//one and two is parent two and two is parent of three
