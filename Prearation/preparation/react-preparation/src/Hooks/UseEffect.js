import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('EA23')
    const [width, setWidth] = useState(window.screen.width)

    console.log(width)

    useEffect(()=>{
        console.log('ComponentDidMount')
    },[count]) //whenever you give array of dependencies that state will call particularly.

    useEffect(()=>{
        console.log('UseEffect......')
    },[name])

    const resizedScreen = () =>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize',resizedScreen)  //resize is the event which shows the size of your screen.
        console.log('Add Event')
        //and this remove function is componentDidMount
        return () => {
            window.removeEventListener('resize',resizedScreen)
            console.log('Remove Event')
        }
    },[])
  return (
    <div>
        <h1>UseEffect</h1>
        {/* //It render, it is the ComponentDidMount */}
        <h1>{count}</h1>
        {/* //Then state update it is Updating , it is called as componentDidUpdate */}
      <button onClick={() => setCount (count+ 1)}>Name</button>
      <h1>{name}</h1>
      <button onClick={() => setName('India')}>Name</button>


      <h2>My Screen Size</h2>
      <h3>{width} px</h3>

    </div>
  )
}

export default UseEffect


//when first render on screen it is componentDidMount()
//when we click on the button and state update and console print then it is componentDidUpdate

