
// // this example og uncontrolled form and useRef too.

// import React, { useRef,} from 'react'

// const UseRefCompo = () => {
//     const refData = useRef(null)
  
//     console.log(refData)

//   const resetFunc = () => {
   
//     refData.current.focus()
//     refData.current.style.backgroundColor = 'red'
//    }
//   return (
//     <div>
//         <h1>This is UseRefCompo</h1>
//         <input ref={refData}  onChange={(e)=> setName(e.target.name)} />
//         <button onClick={resetFunc}>Click</button>
//     </div>
//   )
// }

// export default UseRefCompo