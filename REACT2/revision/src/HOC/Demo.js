import React from "react";
import Display from "./Display";

const Demo = (props) => {
    return(
        <div>
            <h1>Count:{props.value.data}</h1>
            <button onMouseOver={() => props.value.setData(props.value.data + 1)}>Hover</button>
        </div>
    )
}
export default Display(Demo)