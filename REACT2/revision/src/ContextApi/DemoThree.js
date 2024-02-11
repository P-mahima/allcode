import React, { useContext } from "react";
import { Store } from "./DisplayContext";

const DemoThree  = () => {
    const infoOne = useContext(Store)
    return(
        <div>
            DemoThree:{infoOne}
        </div>
    )
}
export default DemoThree