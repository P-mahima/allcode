import React, { useState } from "react";

const ControlForm = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState('')

    const handleChange = (e) => {
        e.preventDefault()
        console.log('Name is' , name)
        console.log('UserName is' , user)
    }
    return(
        <div>
            <form onSubmit={handleChange}>
                <label>Name</label>
                <input
                type="text"
                name="name"
                placeholder="EnterName"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                />

                <label>UserName</label>
                <input 
                type="text"
                name="user"
                placeholder="EnterUser"
                value={user}
                onChange={(e)=> setUser( e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}
export default ControlForm




















// import React, { useState } from "react";

// const ControlFrom = () => {

//     const[name, setName] = useState('')
//     const[user, setUser] = useState('')

//     const handleChange = (e) => {
//         e.preventDefault()
//         console.log('name', name)
//         console.log('user name' , user)
//     }
//     return(
//         <div>
//             <form onSubmit={handleChange}>
//                 <label>Name</label>
//                 <input 
//                 type="text"
//                 name="name"
//                 placeholder="EnterName"
//                 value={name}
//                 onChange={(e)=>setName(e.target.value)}/>

//                 <label>UserName</label>
//                 <input
//                 type="text"
//                 name="username"
//                 placeholder="EnterUserName"
//                 value={user}
//                 onChange={(e)=> setUser(e.target.value) }/>
      
      
//                 <button >Click</button>
      
//             </form>

//         </div>
//     )
// }
// export default ControlFrom