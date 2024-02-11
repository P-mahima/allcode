import React, { useState } from 'react'
import Second from './Second'

const First = () => {
    const [data , setdata] = useState(0)
    const Handleclick = () =>{
        setdata(data+1)
    }
  return (
    <div>
    <Second count={data} FunCount={Handleclick} />
    </div>
  )
}

export default First
