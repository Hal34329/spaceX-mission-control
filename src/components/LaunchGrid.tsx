import type { Launch } from "../types/launch"
import LaunchCard from "./LaunchCard"

import { useState } from "react"
import LaunchDetailsOverlay from "./LaunchDetailsOverlay"

type LaunchGridProps = {
    launches: Launch[]
}

const LaunchGrid = ({ launches }: LaunchGridProps) => {
    const [selectedLaunch, setSelectedLaunch] = useState<Launch | null>(null)


    return(
        <>
        <h1 className="text-4xl font-bold text-text-lighter dark:text-text-dark">Launch Manifest</h1>
        <h3 className="text-text-light-muted dark:text-text-dark-muted">Tracking upcoming and past missions.</h3>
        <div className="flex items-center gap-4 flex-col lg:flex-row">
            <form role="search" id="jobs-search-form" className="min-w-full lg:min-w-md max-w-dvw flex p-2.5 rounded-2xl bg-surface-darker dark:bg-surface-dark mt-6 lg:my-5 shrink justify-self-center"> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" className="icon icon-tabler icons-tabler-outline icon-tabler-search" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M3 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0m18 11-6-6"/></svg>
                <input type="text" placeholder="Search mission name, flight number..." name="searchText" className="searchText flex-1 ml-2 focus:outline-none" />
            </form>
            <button className="btn-filter active-filter">All missions</button>
            <button className="btn-filter">Starlink</button>
            <button className="btn-filter">Falcon 9</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {launches.map(launch => (
                <LaunchCard key={launch.id} launch={launch} onClick={() => setSelectedLaunch(launch)} />
            ))}
        </div>

        {selectedLaunch && (
        <LaunchDetailsOverlay launch={selectedLaunch} onClose={() => setSelectedLaunch(null)}
        />
        )}
        </>
    )
}

export default LaunchGrid