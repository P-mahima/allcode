import React, { useState } from 'react'

const ControlCompo = () => {
    const[value, setValue] = useState('')
    const [user, setUser] = useState('')

    const FromSubmit = (e) => {
        e.preventDefault()
        console.log('Name is' ,value)
        console.log('Number is',user)
    }
  return (
    <div>
        <form onSubmit={FromSubmit}>
           
        <label>Name:</label>
            <input
            type='text'
            name='value'
            placeholder='value'
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            />

            <label>UserName:</label>
            <input
            type='text'
            name='user'
            placeholder='user'
            value={user}
            onChange={(e)=> setUser(e.target.value)}
            />


            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ControlCompo