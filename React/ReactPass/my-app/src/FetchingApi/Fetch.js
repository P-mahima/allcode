import React, { useEffect, useState } from "react";

const Fetch = () => {
    const [data, setData] = useState('')
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json) => setData(json))
    })
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>Username:</td>
                        <td>email</td>
                    </tr>
                    {
                        data && data.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Fetch