import React, { useState } from 'react'

const MainHOC = (WrappedCompo) => {
    function Hoc(){
        const [data, setData] = useState(0)
        const HandleClick = () => {
            setData(data + 1)
        }
        return(
            <div>
                <WrappedCompo data={data} HandleClick={HandleClick}/>
            </div>
        )
    }
    return Hoc
 
}

export default MainHOC
