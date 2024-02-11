import React from 'react'

export default function FunChildComp(props) {
  return (
    <div>
        <h1>FunChildComp</h1>
        <h1>{props.Name}</h1>
        <h1>{props.Email}</h1>
        <h1>{props.value}</h1>
        {/* <h1>{props.object}</h1> */}
        
         {/* {props.object.map((item,index)=>{
            return(
                <h1>{item.Batch}</h1>
            )
         })} */}
    </div>
  )
}
