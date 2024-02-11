import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch(action){
        case 'INC' :
            return state + 1
        case 'DEC' :
            return state - 1
        case "MUL" : 
            return state * 2
        case 'DIV' :
            return state / 2
        default :
            return 0

    }
}
const UseReducer = () => {
    const [value, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Value:{value}</h1>
      <button onClick={() => dispatch('INC')}>INC</button>
      <button onClick={() => dispatch('DEC')}>DEC</button>
      <button onClick={() => dispatch('MUL')}>MUL</button>
      <button onClick={() => dispatch('DIV')}>DIV</button>
    </div>
  )
}

export default UseReducer
