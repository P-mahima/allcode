import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { add } from './CounterSlice'

const DisplayData = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
 
    function handleAdd(){
        dispatch(add(1))
    }
 
    return (
    <div>

        <h1>{count}</h1>
        <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default DisplayData