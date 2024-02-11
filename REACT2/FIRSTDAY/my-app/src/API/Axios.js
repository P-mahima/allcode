import React, { useEffect, useState } from "react";
import axios from 'axios'

const Axios = () => {
    const [Data, setData] = useState("");

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8325656dfd9524336f4b50df6db3b0c`)
            .then((response) => setData(response.data))
    }, [])

    return (
        <div>
           <h1>Name {Data && parseInt((Data.main.temp))}deg</h1>
        </div>

    )
}
export default Axios;