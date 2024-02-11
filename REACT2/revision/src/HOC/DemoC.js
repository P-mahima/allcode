import React from "react";
import Display from "./Display";

const DemoC = (props) => {
    return(
        <div>
            <h1>Count:{props.value.data}</h1>
            <button onClick={()=> props.value.setData(props.value.data + 1)}>Click</button>

        </div>
    )
}
export default Display(DemoC)