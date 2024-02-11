import React from "react";
import Higheror from "./Higheror";

const HoverCounter = (props) => {
    console.log("Props for HoverCounter",props)
    
    return(
        <div>
            <h1>Count:{props.Counter}</h1>
            <button onMouseOver={props.Click}>Click</button>

        </div>
    )
}
export default Higheror(HoverCounter);