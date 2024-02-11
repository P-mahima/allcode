import React from "react";

const FunChild = (props) => {
    return(
        <div>
            <h1>Count:{props.value.data}</h1>
            <button onClick={() => props.value.setData(props.value.data.push(6,7,8,9,10))}>Click</button>
        </div>
    )
}
export default FunChild