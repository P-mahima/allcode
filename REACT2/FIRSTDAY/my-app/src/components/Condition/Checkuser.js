import React from "react";
import Login from "./Login";
import Logout from "./Logout";
// import Login from "./Login";
// import Logout from "./Logout";

const Checkuser = (status) =>{
    const isEffort = true
    return(
        <div>
            {isEffort ? <Login/> : <Logout/>}
        </div>
    )
//   if(true){
//     return <Login/>
//   }
//   else{
//     return <Logout/>
//   }
}
export default Checkuser;