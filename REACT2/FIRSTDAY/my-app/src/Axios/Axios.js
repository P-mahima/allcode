import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Axios = () => {
    const [val, setdata] = useState('')
    const [name, setname] = useState('')
    const [city, setcity] = useState('')
   useEffect(()=>{

       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e8325656dfd9524336f4b50df6db3b0c`)
       .then((data)=>{
        setdata(data.data)
        
   
       }).catch((Error)=>{
           console.log(Error)
       })
   }, [name])
   console.log(val)
   const handleUpdate = () => {
    setname(city)
   }




  return (
    <div>
        <input type='text'
        placeholder='Entercity'
        name= 'city'
        onChange={(e)=> setcity(e.target.value)} />
     <h1>City Temp. {val && parseInt((val.main.temp) -273)}deg</h1>
     <h1>City Name : {val && ((val.name))}</h1>
     
     <button onClick ={handleUpdate}>Click</button>
    </div>
  )
}

export default Axios