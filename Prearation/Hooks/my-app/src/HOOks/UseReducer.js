import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'Inc':
            return state + 1;
        case 'Dec' :
            return state - 1;
        case 'Reset':
            return 0;
        default :
            return 0;
    }

}
const UseReducer = () => {

    const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>value:{count}</h1>
      <button onClick={() => dispatch('Inc')}>Add</button>
      <button onClick={() => dispatch('Dec')}>Sub</button>
      <button onClick={() => dispatch('Reset')}>Reset</button>
    </div>
  )
}

export default UseReducer
