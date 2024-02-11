import React from "react";
import {Routes,Route} from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import DynamicRoute from "./DynamicRoute";


const NavBar = () => {
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path="/dyanamic/:name" element={<DynamicRoute/>}/>

            </Routes>
        </div>
    )
}
export default NavBar