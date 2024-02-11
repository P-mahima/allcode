import React, { Suspense, lazy } from 'react'
































const Home = lazy(() => import('./Home'))
const About = lazy(()=>import('./About'))
const MainCompo = () => {
  return (
    <div>
      <Suspense fallback={'Please Wait its Loading'}>
        <About/>
        <Home/>
      </Suspense>
    </div>
  )
}

export default MainCompo
