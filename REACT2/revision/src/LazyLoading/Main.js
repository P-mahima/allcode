import React, { Suspense, lazy } from "react";


const DemoOne = lazy(()=> import('./DemoOne'))
const DemoTWo = lazy(()=>import('./DemoTwo'))
const Main = () => {
    return(
       <div>
        <Suspense fallback={'Loading...'}>
            <DemoOne/>
            <DemoTWo/>
        </Suspense>
       </div>
    )
}
export default Main