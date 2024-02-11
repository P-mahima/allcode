import React, { useRef } from "react";

const UncontrolForms = () => {
    const user = useRef(null)

    const ResetFunc = (e) => {
        e.preventDefault()
        user.current.focus()
        user.current.style.bakgroundColor = 'red'
    }
    return(
        <div>
            <form >
            <input type="text" ref={user}/>
            <button onClick={ResetFunc}>Click</button>
            </form>
        </div>
    )
}
export default UncontrolForms