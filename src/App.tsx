import { useLaunches } from './hooks/useLaunches'
import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import LoadingState from './components/ui/LoadingState'
import ErrorState from './components/ui/ErrorState'
import LaunchGrid from './components/launches/LaunchGrid'

export type FilterState = {
  successful: boolean;
  failed: boolean;
}

export type MissionType = 'all' | 'upcoming' | 'past';

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

    const [missionType, setMissionType] = useState<MissionType>('all');
    const handleMissionTypeChange = (type: MissionType) => {
      setMissionType(type);
    };

    

  return (
    <>
    <div className='flex min-h-dvh'>
      <Sidebar filters={filters} onFilterChange={toggleFilter} 
      currentMissionType={missionType} onMissionTypeChange={handleMissionTypeChange}
      />

      <main className='flex-1 mx-5 my-4'>
        {loading && <LoadingState />}
        {error && <ErrorState message={error} />}
        {!loading && !error && <LaunchGrid launches={launches} activeFilters={filters} 
        missionType={missionType}
        />}
        {/* <pre>
        { JSON.stringify(launches, null, 2) }
        </pre> */}
      </main>
    </div>
    </>
  )
}

export default App
