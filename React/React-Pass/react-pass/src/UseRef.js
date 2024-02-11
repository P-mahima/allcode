import { useRef } from "react";


function UseRef() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}
export default UseRef







// import React, { useRef } from "react";

// const UseRef = () =>{
//     const UseRef = useRef(null)

//     const ResetFunc = () => {
//         UseRef.current.focus()
//         UseRef.current.style.backgroundColor = 'red'
//     }
//     return(
//         <div>
//             <input ref={UseRef}/>
//             <button onClick={ResetFunc}>click</button>
//         </div>
//     )
// }
// export default UseRef