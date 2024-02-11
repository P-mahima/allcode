import React from "react";
import Result from "./Result";

const OnHover = (props) => {
    return(
        <div>
            <h1>Number:{props.Counter}</h1>
            <button onMouseOver={props.Click}>Click</button>
        </div>
    )
}
export default Result(OnHover)