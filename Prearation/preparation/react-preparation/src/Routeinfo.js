import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './RouteCompo/Home'


const Routeinfo = () => {
    const  info = useParams(Home)

    
  return (
    <div>
        <div>
   
      {info.student}
    
        </div>
       
        
        {/* <h1>List</h1> */}
    </div>
  )
}

export default Routeinfo
