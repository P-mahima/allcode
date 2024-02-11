import React from "react";
import { useParams } from "react-router-dom";
import Home from "./Components/Home";

const DynamicRoute = () => {
    const data = useParams(Home)
    return(
        <div>
            {data.name}
        </div>
    )
}
export default DynamicRoute