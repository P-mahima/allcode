import React, { useState } from 'react'

const MainFunction = (WrappedComponent) => {
    function SecondCompo(){
        const [data, setdata] = useState(0)
        const Handleclick = () => {
            setdata(data + 1)
        }
        return(
            <div>

                <WrappedComponent data={data} Handleclick={Handleclick}/>
            </div>
        )
    }
  return SecondCompo
}

export default MainFunction
