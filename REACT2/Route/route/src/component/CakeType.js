import React from 'react'
import { useParams } from 'react-router-dom'

function CakeType() {
  // const data = useLocation();
  const data = useParams();
  console.log(data)
  const {name} = data

  return (
    <div>
    <h1>CakeType : {name}</h1>
    </div>
  )
}

export default CakeType