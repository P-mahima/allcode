import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state , action) => {
  switch(action){
    case "Increase":
      return state+1
    case 'Decrement' :
      return state -2
      case 'reset' :
      return 0
    default:
      return 0  
  }

}
const UseReducerCompo = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>UseReducer</h1>
      <h1>Count:{count}</h1>
      <button onClick={() => dispatch('Increase')}>Increment</button>
      <button onClick={() => dispatch('Decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default UseReducerCompo
