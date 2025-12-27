import type { Launch } from "../../types/launch"
import LaunchCard from "./LaunchCard"

import { useMemo, useState } from "react"
import LaunchDetailsOverlay from "./LaunchDetailsOverlay"
import type { FilterState, MissionType } from "../../App"

type LaunchGridProps = {
    launches: Launch[]
    activeFilters: FilterState
    missionType: MissionType
}

const LaunchGrid = ({ launches, activeFilters, missionType }: LaunchGridProps) => {
    const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredLaunches = useMemo(() => {
    return launches.filter(launch => {
        const searchLower = searchTerm.toLowerCase().trim();

        if (searchLower) {
            if (searchLower.startsWith('#')) {
                const numberQuery = searchLower.substring(1); 
                if (!launch.flight_number?.toString().includes(numberQuery)) {
                    return false;
                }
            } else {
                const matchesName = launch.name.toLowerCase().includes(searchLower);
                const matchesFlightNumber = launch.flight_number?.toString().includes(searchLower);
                
                if (!matchesName && !matchesFlightNumber) return false;
            }
        }
        if (missionType === 'upcoming' && !launch.upcoming) return false;
        if (missionType === 'past' && launch.upcoming) return false;

        const { successful, failed } = activeFilters;
        if (successful || failed) {
            if (successful && launch.success) return true;
            if (failed && launch.success === false) return true;
            return false;
        }

        return true;
    });
    }, [launches, activeFilters, missionType, searchTerm]);
    
    const displayedLaunches = filteredLaunches.slice(0, visibleCount);

    const [prevFilters, setPrevFilters] = useState({ searchTerm, missionType, activeFilters });

    if (
        prevFilters.searchTerm !== searchTerm ||
        prevFilters.missionType !== missionType ||
        prevFilters.activeFilters !== activeFilters
    ) {
        setPrevFilters({ searchTerm, missionType, activeFilters });
        setVisibleCount(6);
    }

    return(
        <>
        <h1 className="text-text-light dark:text-text-dark text-4xl font-bold">Launch Manifest</h1>
        <h3 className="text-text-light-muted dark:text-text-dark-muted">Tracking upcoming and past missions.</h3>
        <div className="mb-5 flex w-full max-w-full flex-col items-stretch gap-4 overflow-hidden lg:mb-0 lg:flex-row lg:items-center">
            <form role="search" id="jobs-search-form" className="bg-surface-light/80 dark:bg-surface-dark mt-6 flex max-w-dvw min-w-full flex-1 items-center rounded-2xl p-2.5 transition-colors lg:my-5 lg:min-w-md"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="icon icon-tabler icons-tabler-outline icon-tabler-search text-primary-light dark:text-text-dark" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"/></svg>
                <input type="text" placeholder="Search mission name or  #flight number..." name="searchText" className="searchText text-primary-light dark:text-text-dark ml-2 flex-1 focus:outline-none" 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <h3 className="bg-surface-light/80 text-primary-light dark:bg-surface-dark/80 dark:text-text-dark flex items-center rounded-xl p-2.5 px-6 text-sm font-medium whitespace-nowrap lg:mt-0 lg:ml-5">
                Showing {displayedLaunches.length} of {filteredLaunches.length} results
            </h3>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedLaunches.map(launch => (
                <LaunchCard key={launch.id} launch={launch} onClick={() => setSelectedLaunch(launch)} />
            ))}
        </div>
        
        {visibleCount < filteredLaunches.length && (
            <div className="mt-10 mb-5 flex justify-center">
                <button onClick={() => setVisibleCount(prev => prev + 6)} className="bg-surface-light/80 text-primary-light dark:bg-surface-dark dark:text-text-dark dark:ring-emerald-splash/80 cursor-pointer rounded-xl px-6 py-2 ring ring-black/95 transition-colors hover:bg-neutral-800 dark:hover:bg-neutral-800/40" >
                    Show More Missions
                </button>
            </div>
        )}

        {selectedLaunch && (
            <LaunchDetailsOverlay launch={selectedLaunch} onClose={() => setSelectedLaunch(null)} />
        )}
        </>
    )
}

export default LaunchGrid