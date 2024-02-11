import axios from "axios";
import React, { useEffect, useState } from "react";
const AxiosApiCalling = () => {
    const [data, setData] = useState('');


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setData(res.data))
            .catch((error) => console.log(error))
    }, []);

    console.log(data)

    
    return (
        <div>
            AxiosApiCalling
            {data && data.map((item, index) => {
                return (
                    <div key={index}>
                       <table border={1} style={{width:'100%'}}>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                            </tr>
                       </table>
                            
                    </div>
                )
            })}
        </div>
    )
}
export default AxiosApiCalling