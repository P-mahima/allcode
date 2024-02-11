import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import { add, div, mul, sub } from './CounterSlice'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>dispatch(add(1))}>ADD</button>
      <button onClick={()=>dispatch(sub(1))}>SUB</button>
      <button onClick={()=>dispatch(mul(2))}>MUL</button>
      <button onClick={()=>dispatch(div(2))}>DIV</button>
    </div>
  )
}

export default DisplayData
