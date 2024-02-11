import React from "react";
import D from "./D";

const C = (props) =>{
    return(
        <div>
            <D valueThree ={props.valueTwo} AddThree={props.AddTwo}/>
        </div>
    )
}
export default C