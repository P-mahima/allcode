import React, { useState } from "react";
import FunctionChild from "./FunctionChild";

const FunctionParent = () => {
    const [data, setData] = useState(0)
    return(
        <div>
            <FunctionChild value={{data, setData}} />
        </div>
    )
}
export default FunctionParent