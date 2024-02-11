import React, { useState, useEffect } from 'react'

const Api = () => {
    const [Data, setData] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setData(json))
            .catch((err) => console.log(err));
    }, []);
    console.log(Data);
    return (
        <div>
            <h1 style={{ backgroundColor: "cyan", display: "inline" }}>ApiCalling using useEffect Hook imp question</h1>
            <table border={1}>

                <tr>
                    <th>name</th>
                    <th>username</th>
                    <th>Email</th>
                    <th>website</th>
                </tr>
                {Data.map(user=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                    </tr>
                ))}
                {/* {Data && Data.map((item) => {
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>${item.id}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>

                    </tr>
                }

                )} */}





            </table>
        </div>
    )
}
export default Api;
