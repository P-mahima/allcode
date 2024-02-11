import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'

const LastCompo = () => {
    useEffect(()=>{
        const timer = setInterval(() => {
            console.log('Hello I am Clean up with useEffect')
        },2000) 

        
        return () => {
            console.log('Component is Unmount')
            clearInterval(timer);
        }
    },[])
  return (
    <div>
      <Link to ='/Clean'>Click</Link>
    </div>
  )
}

export default LastCompo
