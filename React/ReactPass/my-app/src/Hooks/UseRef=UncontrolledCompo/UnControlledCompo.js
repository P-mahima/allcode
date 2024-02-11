import React, { useRef } from 'react'

const UnControlledCompo = () => {
  const refData = useRef(null)

  const resetFunc = () => {
    refData.current.focus()
    refData.current.style.backgroundColor = 'red'
    // refData.current.style.backgroundColor = 'red'
  }

  return (
    <div>
      <input ref={refData}/>
      <button onClick={resetFunc}>Click</button>
    </div>
  )
}

export default UnControlledCompo