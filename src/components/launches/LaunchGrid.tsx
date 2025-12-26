import type { Launch } from "../../types/launch"
import LaunchCard from "./LaunchCard"

import { useMemo, useState, useEffect } from "react"
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

    useEffect(() => {
        setVisibleCount(6);
    }, [searchTerm, missionType, activeFilters]);


    return(
        <>
        <h1 className="text-4xl font-bold text-text-light dark:text-text-dark">Launch Manifest</h1>
        <h3 className="text-text-light-muted dark:text-text-dark-muted">Tracking upcoming and past missions.</h3>
        <div className="flex items-stretch lg:items-center mb-5 lg:mb-0 gap-4 flex-col lg:flex-row w-full max-w-full overflow-hidden">
            <form role="search" id="jobs-search-form" className="min-w-full lg:min-w-md max-w-dvw flex-1 flex p-2.5 rounded-2xl bg-surface-light/80 dark:bg-surface-dark mt-6 lg:my-5 items-center transition-colors"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="icon icon-tabler icons-tabler-outline icon-tabler-search text-primary-light dark:text-text-dark" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"/></svg>
                <input type="text" placeholder="Search mission name or  #flight number..." name="searchText" className="searchText flex-1 ml-2 focus:outline-none text-primary-light dark:text-text-dark" 
                value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                />
            </form>
            <h3 className="flex items-center px-6 p-2.5 bg-surface-light/80 text-primary-light dark:bg-surface-dark/80 dark:text-text-dark font-medium text-sm rounded-xl whitespace-nowrap lg:mt-0 lg:ml-5">
                Showing {displayedLaunches.length} of {filteredLaunches.length} results
            </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {displayedLaunches.map(launch => (
                <LaunchCard key={launch.id} launch={launch} onClick={() => setSelectedLaunch(launch)} />
            ))}
        </div>
        
        {visibleCount < filteredLaunches.length && (
            <div className="flex justify-center mt-10 mb-5">
                <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-6 py-2 bg-surface-light/80 hover:bg-neutral-800 text-primary-light dark:bg-surface-dark dark:hover:bg-neutral-800/40 dark:text-text-dark rounded-xl transition-colors ring ring-black/95 dark:ring-emerald-splash/80 cursor-pointer" >
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