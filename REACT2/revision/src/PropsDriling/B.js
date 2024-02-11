import React from "react";
import C from "./C";

const B = (props) =>{
    return(
        <div>
            <C valueTwo = {props.valueOne} AddTwo = {props.AddOne} />
        </div>
    )
}
export default B