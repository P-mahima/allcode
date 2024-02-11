import React, { useEffect, useState } from "react";

const UseEffect = () => {
    const [data,setData] = useState(0)
    // const [data1,setData1] = useState(0)

    useEffect(()=>{
        alert('UseEffect HOOK')
    })
    return(
        <div>
            <h1>{data}</h1>
            <button onClick={() => setData(data + 1)}> Click</button>
            <button onClick={()=> setData(!data)}>OK</button>
            {data ? <Mount/> : ""}
        </div>
    )
}
export default UseEffect

export const Mount = () => {
    return (
        console.log('Component Unmount')
    )
}