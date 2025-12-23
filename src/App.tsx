// import { useState } from 'react'
// import Fetch from './components/Fetch'
// import type { Launch } from './types/launch'
import { useLaunches } from './hooks/useLaunches'
import LoadingState from './components/LoadingState'
import ErrorState from './components/ErrorState'
import LaunchGrid from './components/LaunchGrid'
import Sidebar from './components/Sidebar'

function App() {
  const { launches, loading, error } = useLaunches()

  return (
    <>
    <div className='flex min-h-screen'>
      <Sidebar />

      <main className='flex-1 mx-5 my-4'>
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && <LaunchGrid launches={launches} />}
        {/* <pre>
        { JSON.stringify(launches, null, 2) }
        </pre> */}
      </main>
    </div>
    </>
  )
}


export default App
