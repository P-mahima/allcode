import React, { useState, useMemo } from 'react'
// import { useMemo } from 'react-router-dom'


const CounterCompo =() => {
    const [add, setadd] = useState(0)
    const [sub, setsub] = useState(100)
    const Multiply = useMemo(   function Multiply(){
        console.log("Multiplication getting called")
        return (
           add*10
        )
    },[add]) //here we are using add inside array because we are using add state variable in function , and we dont written add inside the array then the console.log is render for one time only.
  return (
    <div>CounterCompo
        <div>
            Add:{add}
            <br/>
            <button onClick={()=> setadd(add+1)}>Add</button>
        </div>
        <div>
            Sub:{sub}
            <br/>
            <button onClick={()=> setsub(sub-1)}>Sub</button>
        </div>
        <div>
            <h4>Multiply:{Multiply}</h4>
        </div>
    </div>
  )
}

export default CounterCompo