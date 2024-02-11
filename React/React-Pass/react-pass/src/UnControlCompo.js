import React, { useRef } from "react";

const UncontrolledForms = () => {
    const nameref = useRef();
    const usernameref = useRef()

    const Handle = (e) => {
        e.preventDefault();
        console.log(nameref.current.value)
        console.log(usernameref.current.value)
    }
    return (
        <form>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                ref={nameref}

            />

            <label>userNameName:</label>
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                ref={usernameref}

            />

            <button onClick={Handle}>Click</button>
        </form>
    )
}
export default UncontrolledForms;