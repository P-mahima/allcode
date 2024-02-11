import React from "react";

const E = (props) =>{
    return(
        <div>
            <h1>Count:{props.valueFour}</h1>
            <button onClick={props.AddFour}>Click</button>
        </div>
    )
}
export default E