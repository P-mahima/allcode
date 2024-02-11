import React,{memo} from "react";

const UseCall = (expensive) => {
    console.log("Hello I am useCallback hook")
    return(
        <div></div>
    )
}
export default memo(UseCall)