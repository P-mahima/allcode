import React, { Suspense, lazy } from 'react'


const Demo = lazy(() => import('./Demo'))
const Demo1 = lazy(() => import('./Demo1'))
const Component = () => {
  return (
    <div>
      <Suspense fallback={'Wait till its Loading'}>
        <Demo/>
        <Demo1/>
      </Suspense>
    </div>
  )
}

export default Component
