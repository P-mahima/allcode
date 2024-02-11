import React, { useContext } from "react";
import { Store } from "./DataStore";

const Demo2 = () => {
    const demo =useContext(Store)
    console.log(demo)
    return(
        <h1>Demo2</h1>
    )
}
export default Demo2