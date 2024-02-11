import React, { useReducer } from 'react'


const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'MUL':
            return state * 2;
        default:
            return 0
    }

}
const USeReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => dispatch('INC')}>INC</button>
            <button onClick={() => dispatch('DEC')}>DEC</button>
            <button onClick={() => dispatch('MUL')}>MUL</button>
        </div>
    )
}

export default USeReducer