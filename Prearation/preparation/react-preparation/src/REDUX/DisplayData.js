import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, sub } from './CounterSlice'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
  
  function handleAdd (){
    dispatch(add(1))
  }
  function handleSub (){
    dispatch(sub(1))
  }
    return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleSub}>Decrement</button>
    </div>
  )
}

export default DisplayData