import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const ClaenFunc = () => {
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log('UseEffect CleanUp Function')
        },5000)
        return () => {
            clearInterval(timer)
            console.log('Clear interval => component UnMount')
        }
    })
  return (
    <div>
      <Link to='/info'>Clean</Link>
    </div>
  )
}

export default ClaenFunc
