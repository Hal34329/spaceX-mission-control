// import { useState } from 'react'
// import Fetch from './components/Fetch'
// import type { Launch } from './types/launch'
import { useLaunches } from './hooks/useLaunches'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import LaunchGrid from './components/LaunchGrid'

function App() {
  const { launches, loading, error } = useLaunches()

  return (
    <>
      {loading && <LoadingState />}
      {error && <ErrorState message={error} />}
      {!loading && !error && <LaunchGrid launches={launches} />}
      {/* <pre>
        {JSON.stringify(launches, null, 2)}
      </pre> */}
    </>
  )
}


export default App
