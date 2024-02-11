import React, { useState } from 'react'

const Childcompo = (props) => {
    const [name ,setName] = useState('')
    const HandleClick = () => {
        props.SetData(name)
    }
      return (
    <div>
      <h1>Childcompo</h1>
      <form>

      <label> Enter Name:

      <imput type= 'text' value = {name} placeholder="Enter name" onChange ={(e)=> setName(e.target.value)}
      />
      </label>
      </form>

      <button onClick={HandleClick}>Click</button>
    </div>
  )
}

export default Childcompo
