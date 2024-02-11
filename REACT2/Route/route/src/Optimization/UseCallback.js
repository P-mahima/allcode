import React, { useCallback, useState } from "react";
import UseCall from "./UseCall";

const UseCallback = () => {
    const [counter ,setcounter] =useState(0)
    const expensive = useCallback(function expensivee(){
        console.log("UseCallback")
    },[counter])
    return(
        <div>
            <h1>Counter:{counter}</h1>
            <button onClick={()=>setcounter(counter+1)}>Click</button>
            <UseCall expensive={expensive}/>
        </div>
    )
}
export default UseCallback