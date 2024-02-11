import React, { useState } from "react";

const Result = (ResultCompo) => {
    function Resultcompo() {
        const [data, setdata] = useState(0)
        const Click = () =>{
            setdata (data+1)
        }
        return(
            <div>
                <ResultCompo Counter={data} Click={Click}  />
                {/* <h1>Counter={data} Click={Click} </h1> */}
            </div>
        )
    }
    return Resultcompo;
}
export default Result