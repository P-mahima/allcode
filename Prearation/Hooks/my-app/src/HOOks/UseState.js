import React, { useState } from "react";

const UseState = () => {
    const [data, setData] = useState(0)
    return(
        <div>
            <h1>{data}</h1>
            
            <button onClick={() => setData(data + 1)}>Clickme</button>
        </div>
    )
}
export default UseState