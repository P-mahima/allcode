import React, { useContext } from "react";
import { Store } from "./DataStore";

const Demo = () => {
    const Data = useContext(Store)
    console.log(Data)
    return(
        <h1>Data:{Data}</h1>
    )
}
export default Demo