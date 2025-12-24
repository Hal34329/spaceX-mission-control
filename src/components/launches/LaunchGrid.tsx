import type { Launch } from "../../types/launch"
import LaunchCard from "./LaunchCard"

import { useMemo, useState } from "react"
import LaunchDetailsOverlay from "./LaunchDetailsOverlay"
import type { FilterState } from "../../App"

type LaunchGridProps = {
    launches: Launch[]
    activeFilters: FilterState
}

const LaunchGrid = ({ launches, activeFilters }: LaunchGridProps) => {
    const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null)

    const filteredLaunches = useMemo(() => {
        return launches.filter(launch => {
            const { successful, failed } = activeFilters;
            if (!successful && !failed) return true;
            if (successful && launch.success) return true;
            if (failed && launch.success === false) return true;
            return false;
        });
    }, [launches, activeFilters]);

    const [visibleCount, setVisibleCount] = useState(6);

    const displayedLaunches = filteredLaunches.slice(0, visibleCount);

    return(
        <>
        <h1 className="text-4xl font-bold text-text-lighter dark:text-text-dark">Launch Manifest</h1>
        <h3 className="text-text-light-muted dark:text-text-dark-muted">Tracking upcoming and past missions.</h3>
        <div className="flex items-center gap-4 flex-col lg:flex-row w-full max-w-full overflow-hidden">
            <form role="search" id="jobs-search-form" className="min-w-full lg:min-w-md max-w-dvw flex-1 flex p-2.5 rounded-2xl bg-surface-darker dark:bg-surface-dark mt-6 lg:my-5 items-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="icon icon-tabler icons-tabler-outline icon-tabler-search" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"/></svg>
                <input type="text" placeholder="Search mission name, flight number..." name="searchText" className="searchText flex-1 ml-2 focus:outline-none" />
            </form>
            <h3 className="flex items-center px-6 p-2.5 dark:bg-surface-dark/80 text-text-primary-dark font-medium text-sm rounded-xl whitespace-nowrap lg:mt-0 lg:ml-5">
                Showing {displayedLaunches.length} results
            </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedLaunches.map(launch => (
                <LaunchCard key={launch.id} launch={launch} onClick={() => setSelectedLaunch(launch)} />
            ))}
        </div>
        
        {visibleCount < filteredLaunches.length && (
            <div className="flex justify-center mt-10 mb-5">
                <button onClick={() => setVisibleCount(prev => prev + 6)} className="px-6 py-2 dark:bg-surface-dark dark:hover:bg-neutral-800/40 text-text-dark rounded-xl transition-colors border dark:border-emerald-splash/80 cursor-pointer" >
                    Show More Missions
                </button>
            </div>
        )}

        {selectedLaunch && (
            <LaunchDetailsOverlay launch={selectedLaunch} onClose={() => setSelectedLaunch(null)}
        />
        )}
        </>
    )
}

export default LaunchGrid