import React, { useState } from 'react'

const HOCParent = (WrappedCompo) => {
    function Hoc(){
        const [data, setData] = useState(0)
        const Btn = () => {
            setData(data + 1)
        }
        return(
            <div>
                <WrappedCompo value={data} Btn= {Btn}/>
            </div>
        )
    }
  return Hoc
}

export default HOCParent