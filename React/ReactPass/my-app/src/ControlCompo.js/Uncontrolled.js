import React, { useRef } from 'react'

const Uncontrolled = () => {
    const nameRef = useRef()
    const UserRef = useRef()

    const RefForm = (e) => {
        e.preventDefault()
        console.log('Uncontrolled name',nameRef.current.value)
        console.log('Uncontrolled number',UserRef.current.value)

    }
    return (
        <div>
            <form>
                <label>Name:</label>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    ref={nameRef}
                />

                <label>UserName:</label>
                <input
                    type='text'
                    name='name'
                    placeholder='name'
                    ref={UserRef}
                />

                <button onClick={RefForm}>Submit</button>
            </form>

        </div>
    )
}

export default Uncontrolled