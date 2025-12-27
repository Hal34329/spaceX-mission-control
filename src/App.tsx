import { useLaunches } from './hooks/useLaunches'
import { useState } from 'react'
import Sidebar from './components/layout/Sidebar'
import LoadingState from './components/ui/LoadingState'
import ErrorState from './components/ui/ErrorState'
import LaunchGrid from './components/launches/LaunchGrid'

import IconMenu from './components/ui/IconMenu'

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

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <>
    <div className='flex min-h-dvh flex-col lg:flex-row'>
      <Sidebar filters={filters} onFilterChange={toggleFilter} 
      currentMissionType={missionType} onMissionTypeChange={handleMissionTypeChange}
      isOpen={isSidebarOpen} onClose={closeSidebar}
      />

      <header className="dark:bg-surface-darker text-primary-light dark:text-text-dark mb-2 flex items-center bg-black/85 py-2 tracking-wider lg:hidden">
        <button onClick={toggleSidebar} className="p-2">
          <IconMenu /> 
        </button>
        <span className="ml-2 font-bold">SPACEX</span>
      </header>

      <main className='mx-5 my-4 flex-1'>
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
