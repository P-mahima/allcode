import React, { useEffect, useState } from "react";

const Compofetch = () => {
    const [Data, setData]  = useState('')
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=> response.json())
        .then((json)=> setData(json))
        .catch((error)=> console.log(error))
    },[])
    return (
        <div>
            <table border={1}>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
                {
                    Data && Data.map((item, index)=>{
                        return(
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                            </tr>
                        )

                    })
                }
                {/* {
                   Data &&  Data.map(item => (
                    <tr key={item.id}>
                        <th>{item.name}</th>
                        <th>{item.username}</th>
                        <th>{item.email}</th>
                    </tr>
                   ))
                   
                } */}
            </table>
        </div>
    )
}
export default Compofetch

        //  {/* <tr>
        //      <td>{item.name}</td>
        //      <td>{item.username}</td>
        //      <td>{item.email}</td>
        //  </tr> */}
 