import { useEffect, useState } from "react"



const Useeffect = () =>{
    const [value, setValaue] = useState(0);
    const Increment = () => {
        setValaue(value+1)
    }
    useEffect (()=>{
        alert("useEffect is working")
        console.log("useEffect is working");
    },[value])
    return(
        <div>
            <h1 style={{backgroundColor:"cyan" , display:"inline"}}>UseEffect Hook</h1>
            <h1>Count:{value}</h1>
            <button onClick={Increment}>Increment</button>
        </div>
    )
}
export default Useeffect;