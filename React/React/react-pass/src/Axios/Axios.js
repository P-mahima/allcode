// import { useEffect, useState } from "react"
// import axios from 'axios'


// function Axios(){
//     const [val , setVal]= useState('')
//     useEffect(()=>{
//         axios.get('https://jsonplaceholder.typicode.com/users')
//         .then((data)=>setVal(data))
//         .catch((err)=> console.log(err))

//     },[])

// return(
//     <div>
    
//         {
//             val && val.filter((item)=>{
//                 <h1>{item.name}</h1>

//             })
//         }
//         {/* <h1>[val]</h1> */}
//     </div>
// )
// }
// export default Axios


import React, { useEffect, useState } from "react";
import axios from 'axios'

const Axios = () => {
    const [Data, setData] = useState("");

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=&appid=e8325656dfd9524336f4b50df6db3b0c`)
            .then((response) => setData(response.data))
    }, [])

    return (
        <div>
           <h1>Name {Data && parseInt((Data.main.temp))}deg</h1>
        </div>

    )
}
export default Axios;