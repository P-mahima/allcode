import React, { useState } from 'react'

const Main = (WarrapedCompo) => {
    function HighOrder(){
        const [data, setData] = useState(0)
        const HandleClick = () => {
            setData(data + 1)
        }
        return(
            <div>
                <WarrapedCompo value= {data} HandleClick={HandleClick}/>

            </div>
        )
    }
  return HighOrder
}

export default Main
