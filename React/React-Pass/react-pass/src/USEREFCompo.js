import React, { useRef } from "react";

const USEREFCompo = () => {
    const User = useRef(null)
    const Click = () => {
        User.current.focus()
        User.current.style.backgrouncolor = 'red'
    }
    return(
        <div>
            <input type="text" ref={User}/>
            <button onClick={Click}>ClickREF</button>
        </div>
    )
}
export default USEREFCompo