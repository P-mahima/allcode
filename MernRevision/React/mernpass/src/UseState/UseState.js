import React, { useState } from 'react'

const UseState = () => {
    const [post, setPost] = useState(0);

  return (
    <div>
        <h2>Count:{post}</h2>
        <button onClick={() => setPost(post+1)}>Click</button>

    </div>
  )
}

export default UseState
