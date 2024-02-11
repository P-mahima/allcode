import React, { useState } from 'react'
import FunChildComp from './FunChildComp'

export default function FunParentComp() {
    const [data, setdata] = useState([1,2,3,4,5])
    const [obj, setobj] =useState([
        {
            Batch:'EA23'
        }
    ])
  return (
    <div>
        <h1>FunParentComp</h1>
        <FunChildComp Name='Mahima' email='mahi@gmail.com'/>
        <FunChildComp value= {[data, setdata]}/>
        {/* <FunChildComp object = {[obj, setobj]}/> */}
    </div>
    
  )
}
