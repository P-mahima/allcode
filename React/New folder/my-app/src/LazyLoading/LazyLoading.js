import React, { Suspense, lazy } from 'react'


const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const LazyLoading = () => {
  return (
    <div>
        <Suspense fallback={<p>Wait its LazyLoading</p>}>
      <Home/>
      <About/>
        </Suspense>
    </div>
  )
}

export default LazyLoading
