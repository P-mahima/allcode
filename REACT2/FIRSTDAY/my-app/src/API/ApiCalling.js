import React, { useEffect, useState } from "react";

const ApiCalling = () => {
    const [Data, setData] = useState("");

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])
    console.log("name",Data)
    return (
        <div>

            {
    
                Data && Data.map((item, index) => {
                    return (
                        
        
                        <div key={index}>
                            <ul>
                                <li>{item.name}</li>
                            </ul>
                        </div>
                        
                        )
                    })
                }
        </div>

    )
}
export default ApiCalling;