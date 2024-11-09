import React, { lazy, Suspense } from 'react'

const MyComponent = lazy(()=>import('./MyComponent'))

const LazyLoading = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading ...</div>}>
        <MyComponent/>
      </Suspense>
    </div>
  )
}

export default LazyLoading
