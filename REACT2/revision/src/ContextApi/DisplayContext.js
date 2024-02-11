import React, { createContext, useState } from "react";
import DemoOne from "./DemoOne";
import DemoThree from "./DemoThree";
import DemoTwo from "./DemoTWo";


export const Store = createContext()
const DisplayCompo  = () => {
    const [data] = useState([1,2,3,4,5,6])
    return(
        <div>
            <Store.Provider value={data}>
                <div>
                <DemoOne/>
                <DemoThree/>
                <DemoTwo/>

                </div>
            </Store.Provider>
        </div>
    )
}
export default DisplayCompo