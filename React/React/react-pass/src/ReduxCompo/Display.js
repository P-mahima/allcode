import {useDispatch, useSelector} from 'react-redux'
import { add, sub } from './Slice'

const Display = () => {
    const dispatch = useDispatch()
    const {count} = useSelector(state => state)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(add(1))}>click+</button>
            <button onClick={() => dispatch(sub(1))}>Click-</button>
        </div>
    )
}
export default Display