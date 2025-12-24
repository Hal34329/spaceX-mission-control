import { useLaunches } from './hooks/useLaunches'
import LoadingState from './components/ui/LoadingState'
import ErrorState from './components/ui/ErrorState'
import LaunchGrid from './components/launches/LaunchGrid'
import Sidebar from './components/layout/Sidebar'
import { useState } from 'react'

export type FilterState = {
  successful: boolean;
  failed: boolean;
}

function App() {
  const { launches, loading, error } = useLaunches()
  const [filters, setFilters] = useState<FilterState>({
        successful: false,
        failed: false,
    });
  
    const toggleFilter = (key: keyof FilterState) => {
        setFilters((prev) => ({
        ...prev,
        [key]: !prev[key],
        }));
    };

  return (
    <>
    <div className='flex min-h-screen'>
      <Sidebar filters={filters} onFilterChange={toggleFilter} />

      <main className='flex-1 mx-5 my-4'>
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && <LaunchGrid launches={launches} activeFilters={filters} />}
        {/* <pre>
        { JSON.stringify(launches, null, 2) }
        </pre> */}
      </main>
    </div>
    </>
  )
}

export default App
