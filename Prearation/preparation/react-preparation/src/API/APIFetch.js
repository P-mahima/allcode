import React, {useState, useEffect } from "react";

const APIFetch = () => {
    const [Data, setData] = useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return(
        <div>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {Data && Data.map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                    </tr>
                ))}
            </table>
        </div>
    )
}
export default APIFetch