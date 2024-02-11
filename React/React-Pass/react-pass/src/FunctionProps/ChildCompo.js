import React from 'react'

const ChildCompo = (props) => {
    return(
        <div>
            <h2>Count:{props.value.data}</h2>
            <button onClick={()=> props.value.setData(props.value.data + 1)}>Click</button>
        </div>
    )
}
export default ChildCompo