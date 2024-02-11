import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch(action)
    {
        case "INC":
            return state + 1
        case "DEC":
            return state - 1
    }

}
const UseReducer = () => {
    const [value, dispatch] = useReducer(reducer , initialState)
  return (
    <div>
        <h2>Value:{value}</h2>
        <button onClick={() => dispatch("INC")}>INC</button>
        <button onClick={() => dispatch("DEC")}>DEC</button>
    </div>
  )
}

export default UseReducer