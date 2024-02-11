import React from "react";
import Higheror from "./Higheror";

const Clickcounter = (props) => {
    console.log("Props for ClickCounter",props)
    
    return(
        <div>
            <h1>Count:{props.Counter}</h1>
            <button onClick={props.Click}>Click</button>

        </div>
    )
}
export default Higheror(Clickcounter);