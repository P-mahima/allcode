import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add } from './CounterSlice'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
  return (
    <div>
    <h1>Count:{count}</h1>
    <button onClick={() => dispatch(add(1))}>Click</button>
    </div>
  )
}

export default DisplayData