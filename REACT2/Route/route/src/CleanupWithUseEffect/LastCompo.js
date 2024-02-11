import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const LastCompo = () => {
    useEffect(()=>{
        const timer =  setInterval(()=> {
          console.log("Hello I am clean up With UseEffect")
        },10000)


        return() => {
            console.log("Component is UnMount")
            clearInterval( timer );
        }
    },[])
  return (
    <div>LastCompo
        <Link to ='/clean' >Click to go</Link>
    </div>
  )
}

export default LastCompo