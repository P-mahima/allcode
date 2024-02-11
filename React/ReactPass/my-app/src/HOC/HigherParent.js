import React, { useState } from 'react'

const HigherParent = (WrappedCompo) => {
    function Hoc(){
        const [data, setData] = useState(0)
        return(
            <div>
                <WrappedCompo value={{data, setData}}/>
            </div>
        )
    }
  return Hoc
}

export default HigherParent
