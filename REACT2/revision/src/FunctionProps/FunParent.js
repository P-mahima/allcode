import React, { useState } from "react";
import FunChild from "./FunChild";

const FunParent = () => {
    const [data, setData] = useState(
        [1,2,3,4,5,6]
    )
    return(
        <div>
            <FunChild value={{data, setData}} />
        </div>
    )
}
export default FunParent