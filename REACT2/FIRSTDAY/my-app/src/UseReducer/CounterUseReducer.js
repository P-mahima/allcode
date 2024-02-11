import React, { useReducer } from 'react'

const initialState = 0;
const CounterUseReducer = () => {
    const reducer = (state,action) => {
        switch(action){
            case "Increment" : 
            return state+1;

            case "Decrement" :
                return state-1;

            case "Multiplication":
                return state*10;

            case "Reset" :
                return 0

            default:
                return state;
        }


    }
    const [Counter, setCounter] = useReducer(reducer, initialState)
  return (
    <div>
        <h1>CounterUseReducer:{Counter}</h1>
        <button onClick={()=>setCounter("Increment")}>Increment</button> //setCounter will work as Action to dispatch by using string only.
        <button onClick={()=>setCounter("Reset")}>Reset</button>
        <button onClick={()=>setCounter("Decrement")}>Decrement</button>
        <button onClick={()=>setCounter("Multiplication")}>Multiplication</button>
        
    </div>
  )
}

export default CounterUseReducer