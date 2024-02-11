import React, { useRef } from 'react'

const UseRef = () => {
    const refDAta = useRef(null)

    const Add = () => {
        refDAta.current.focus()
        refDAta.current.style.backgroundColor = 'grey'
    }
  return (
    <div>
        <input type='text' ref={refDAta} />
        <button onClick={Add}>Click</button>

    </div>
  )
}

export default UseRef