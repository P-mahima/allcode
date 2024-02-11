import React, { useContext } from 'react'
// import E from './E'
import UserContext from './UserContext'

function D() {
    const data =useContext(UserContext)
    console.log(data)
  return (
    <div>
        <h1>{data.name}</h1>
        <h1>{data.salary}</h1>
        {/* < E/> */}
    </div>
  )
}

export default D