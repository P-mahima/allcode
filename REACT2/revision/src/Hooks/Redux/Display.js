import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add , sub} from './CreateSlice'

const Dispaly = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state =>state)
    const Add = () => {
        dispatch(add + 1)
    }
    const Sub = () => {
        dispatch(sub - 1)
    }
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={Add}>Click</button>
            <button onClick={Sub}>Click</button>
        </div>
    )
}
export default Dispaly