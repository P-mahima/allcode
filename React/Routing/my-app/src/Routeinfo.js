import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './Component/Home'

const Routeinfo = () => {
    const info  = useParams(Home)
  return (
    <div>
      {info.data}
    </div>
  )
}

export default Routeinfo
