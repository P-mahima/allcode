import React from "react";
import { NavLink } from "react-router-dom";

const Link =() => {
    return(
        <div>
            <NavLink to = '/'>Home</NavLink>
            <NavLink to='/About'>About</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>

        </div>
    )
}
export default Link