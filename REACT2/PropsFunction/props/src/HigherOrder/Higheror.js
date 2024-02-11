import React, { useState } from "react";

const Higheror = (WrappedComponent) => {
 function Hoc (){
    const [Counter, setCounter] =useState(0)
    const Click = () => {
        setCounter(Counter+1)
    }
    return(
        <div>
            <WrappedComponent Counter={Counter} Click={Click}/>
        </div>
    )
 }
 return Hoc;

}
export default Higheror;