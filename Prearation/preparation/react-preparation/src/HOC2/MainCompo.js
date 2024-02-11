import React, { useState } from 'react'

const MainCompo = (WrappedComponent) => {
    function Hoc() {
        const [Data, setData] = useState(0)
        const ClickHandle = () => {
            setData(Data+1)
        }
        return(
            <div>
                <WrappedComponent Data={Data} ClickHandle={ClickHandle} />
            </div>
        )
    }
  return Hoc
}

export default MainCompo
