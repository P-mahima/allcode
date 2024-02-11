import React, { Suspense, lazy } from 'react'
// import Home from './Home'
// import About from './About'


const Home = lazy(()=> import('./Home'))
const About = lazy(()=> import('./About'))
const CallCompo = () => {
  return (
    <div>
      <h1>This is CallCompo</h1>
      <Suspense fallback={<p>Wait Component is loading</p>}>
        <Home/>
      </Suspense>
      <Suspense fallback={<p>Wait About is loading</p>}>
      <About/>
      </Suspense>
    </div>
  )
}

export default CallCompo
