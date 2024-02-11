import React, { Suspense, lazy } from 'react'

const Home = lazy(() => import('./Home'))
const About = lazy (() => import('./About'))
const LazyCompo = () => {
  return (
    <Suspense fallback={<h4>Loading.....</h4>}>
        <Home/>
        <About/>
    </Suspense>
  )
}

export default LazyCompo
