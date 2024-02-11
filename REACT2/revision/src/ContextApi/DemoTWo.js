import React, { useContext } from "react";
import { Store } from "./DisplayContext";

const DemoTwo  = () => {
    const infoTwo = useContext(Store)
    return(
        <div>
           DemoTWo:{infoTwo}

        </div>
    )
}
export default DemoTwo