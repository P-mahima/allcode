import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home'

const Routeinfo = () => {
    const info = useParams(Home)
  return (
    <div>
        {info.student}
    </div>
  )
}

export default Routeinfo