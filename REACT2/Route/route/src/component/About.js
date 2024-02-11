import React from "react";
import { Link, useLocation } from "react-router-dom";

const About = () => {
    const Data = useLocation()
    console.log(Data)
    const{name,age} =Data.state
    return (
        <div>
            <h1>AboutUs</h1>
           
            <Link to='/Cake'>Cake Page</Link>
            <Link to='/User' >User Info</Link>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}
export default About