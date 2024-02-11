import React from "react";
import Result from "./Result";

const OnClick = (props) => {
    return(
        <div>
            <h1>Number:{props.Counter}</h1>
            <button onClick={props.Click}>Click</button>
        </div>
    )
}
export default Result(OnClick)