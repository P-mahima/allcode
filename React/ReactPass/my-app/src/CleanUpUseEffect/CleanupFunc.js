import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const CleanupFunc = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('Componet mount again and again ✌')
        },2000)

        return() => {
            console.log('Component Unmount ✔')
            clearInterval(timer)
        }
    })
  return (
    <div>
        <h1>Component Update 👍</h1>
        <Link to='/about'>Click to go</Link>
      
    </div>
  )
}

export default CleanupFunc
