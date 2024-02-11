import React, { useMemo, useState } from 'react'

const UseMemoCompo = () => {
    const [count, setCount] = useState(0)
    const [value, setValue] = useState(100)

 
    const UseMemoFunc = useMemo(()=>{
        console.log('It will Avoid Unnecessary re-rendering')
    },[count]) 
    //Unnecessary avoid the re-rendering it depends upon array of dependencies the , you have to give intial state 
    //in array and when you will play with that initial state this useMemo function will run. 
  return (  <div>
      <h1>UseMemo Hook</h1>
      {UseMemoFunc}
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Count Inc</button>
      <h1>Value:{value}</h1>
      <button onClick={() => setValue(value - 1)}>Value Dec</button>
    </div>
  )
}

export default UseMemoCompo
