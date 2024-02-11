import React, { useRef } from "react";

const UseRef = () => {
    const nameRef = useRef()
    const userRef = useRef()

    const RefFunc = (e) => {
        e.preventDefault()
        console.log('Component nameRef', nameRef.current.value)
        console.log('Component userRef', userRef.current.value)
    }
    return (
        <div>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name"
                    ref={nameRef}
                />

                <label htmlFor="user">UserName:</label>
                <input
                    type="text"
                    name="user"
                    placeholder="Enter username"
                    ref={userRef}
                />
                <button onClick={RefFunc}>Click</button>
            </form>
        </div>
    )
}
export default UseRef