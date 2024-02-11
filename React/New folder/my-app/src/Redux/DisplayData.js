import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add } from './CounterSlice'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {count} = useSelector( state => state)
    const Add = () => {
        dispatch(add(1))
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={Add}>Click</button>
    </div>
  )
}

export default DisplayData
