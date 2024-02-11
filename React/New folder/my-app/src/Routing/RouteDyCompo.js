import React from 'react'
import { useParams } from 'react-router-dom'
import Home from '../Comopnent/Home'

const RouteDyCompo = () => {
    const info = useParams(Home)
  return (
    <div>
        {info.one}
    </div>
  )
}

export default RouteDyCompo