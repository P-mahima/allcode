import React, { useContext } from "react";
import { Store } from "./DisplayContext";

const DemoOne  = () => {
    const info = useContext(Store)
    // console.log(info.data)
    return(
        <h1>
            DemoOne:{info}
        </h1>
    )
}
export default DemoOne