import React, { useEffect, useState } from "react";
// import { json } from "react-router-dom";

const Fetch = () => {
    const [data, setData] = useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.log(error))
    })

    return(
        <div>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                </tr>
                {
                    data && data.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}
export default Fetch