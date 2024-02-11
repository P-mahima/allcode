import React, { useState } from 'react'
import ChildCompo from './ChildCompo'

const ParentCompo = () => {
    const [data, setData] = useState(0)
    return(
        <div>
            <ChildCompo  value={{data, setData}}/>
        </div>
    )
}
export default ParentCompo