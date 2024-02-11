import { useState } from "react"

const Usesatate = () => {
    const [value , setValaue] = useState(0)
    const Increment = () => {
        setValaue(value+1)
    }
    const Decrement = () => {
        setValaue(value-1)
    }
    const Reset = () => {
        setValaue(0)
    }
    return(
        <div>
            <h1 style={{backgroundColor:"rebeccapurple", display:"inline"}}>useState Example</h1>
            <h1>count:{value}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>

    )
}
export default Usesatate