import React from "react";

const FuncChildComp = (props) =>{
    return(
        <div>
            <h1>{props.Name}</h1>
            <h1>{props.Email}</h1>
            <h1>{props.value}</h1>
        </div>
    )
}
export default FuncChildComp