import React from "react";
import { Link } from "react-router-dom";

const User = () =>{
    return(
        <div>
            <h1>User Info</h1>
            <Link to='user/mahima' >Mahima</Link>
            <Link to='user/mahi' >Mahi</Link>
            <Link to='user/falguni' >falguni</Link>
            <Link to='user/riya'>Riya</Link>
            <Link to='user/tina'>Tina</Link>
            <Link to='user/giya'>Giya</Link>
            <Link to='user/mahima' >Mahima</Link>
            <Link to='user/mahima' >Mahima</Link>
        </div>
    )
}
export default User