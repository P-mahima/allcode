import React, { useState } from "react";
import FuncChildComp from "./FuncChildComp";

const FuncParentComp = () => {
    const [data, setdata] = useState([1,2,3,4,5,6,7,8,9])

    return(
        <div>
            <FuncChildComp Name='Mahima' Email='mahima@gmail.com'  />
            <FuncChildComp value= {[data, setdata]} />
           
        </div>
    )
}
export default FuncParentComp