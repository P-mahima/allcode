import React, { useState } from "react";

const Display = (WrappedCompo) => {
    function Hoc(){
        const [data, setData] = useState(0)
        return(
            <WrappedCompo  value= {{data, setData}}/>
        )
    }
    return Hoc
}
export default Display