
import React, { useContext } from "react";
import { Store } from "../ContextApi/MainContext";

const Demo = () => {
    const [Value] = useContext(Store)
    return(
        <div>
            <h2>Data : {Value}</h2>
        </div>
    )
}
export default Demo