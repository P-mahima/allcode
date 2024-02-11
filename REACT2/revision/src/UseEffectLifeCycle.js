import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const UseEffectLifeCycle = () => {
    useEffect(() => {

        const timer = setInterval(() => {
            console.log('Timer Updating')
        },2000)
    
        return() => {
            clearInterval(timer)
            console.log('Timer Unmount')
        }
    })
  return (
    <div>   
        <h1>useEffect LifeCycle</h1>
        <Link to='/clean'>Click to go</Link>
    </div>
  )
}

export default UseEffectLifeCycle