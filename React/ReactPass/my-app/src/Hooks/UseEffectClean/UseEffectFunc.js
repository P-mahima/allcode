import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const UseEffectFunc = () => {
    useEffect(() => {
        const timer = setInterval(()=>{
            console.log('This is UseEffect clean up function')
        },2000)
        
            return () => {
                console.log('Unmount 👍')
                clearInterval(timer)
            }
    })
    return(
        <div>
            <Link to='/about'>Click to go</Link>
        </div>
    )
}
export default UseEffectFunc