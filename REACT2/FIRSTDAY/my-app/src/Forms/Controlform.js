import React, { useState } from "react";

const Controlform = () => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('')

    const Handle = (e) => {
        e.preventDefault();
        // console.log(e.current.value)
        setName(e.target.value)
    }

    return (
        <form>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={Handle}
                // onChange={(e) => {
                //     e.preventDefault()
                //     setName(e.target.value)
                // }}
            />

            <label>Batch</label>
            <input type="text"
                name="name"
                value={userName}
                onChange={(e) => {
                    e.preventDefault()
                    setUserName(e.target.value)
                }}
            />

            <button type="button" onclick={Handle}>Click</button>
        </form>
    )
}
export default Controlform;





