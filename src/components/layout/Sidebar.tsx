import ToggleButton from "../ui/ToggleButton";
import FilterButton from "../ui/FilterButton";
import type { FilterState, MissionType } from "../../App";

type SidebarProps = {
    filters: FilterState
    onFilterChange: (key: keyof FilterState) => void
    currentMissionType: MissionType
    onMissionTypeChange: (type: MissionType) => void
}

const Sidebar = ({filters, onFilterChange, currentMissionType, onMissionTypeChange }: SidebarProps) => {
    return(
        <>
        <aside className="w-64 shrink-0 bg-black/95 dark:bg-surface-darker border-r border-neutral-400 dark:border-neutral-800 sticky top-0 h-screen flex flex-col overflow-y-auto">
            {/* Header */}
            <div className="flex items-center gap-2 m-4 border-neutral-100 dark:border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket size-10 text-primary-lighter dark:text-primary" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3"/><path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>

                <span>
                    <h1 className="font-bold text-primary-light dark:text-text-dark tracking-wider">SPACEX</h1>
                    <h2 className="text-primary-lighter dark:text-primary-dark text-sm tracking-widest">DATA</h2>
                </span>
            </div>
            {/* Navigation / Filters */}
            <nav className="p-4 space-y-2 border-y border-surface-light text-primary-lighter/65 dark:border-surface-dark dark:text-text-dark/65">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-light-muted dark:text-gray-500">Main Menu</h3>
                <button className={`btn-nav ${currentMissionType === 'all' ? 'active-style' : ''}`} onClick={() => onMissionTypeChange('all')} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-category mr-2" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0 3 3 0 1 0-6 0"/></svg> All missions
                </button>
                <button className={`btn-nav ${currentMissionType === 'upcoming' ? 'active-style' : ''}`} onClick={() => onMissionTypeChange('upcoming')} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-calendar-week mr-2" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12-4v4M8 3v4m-4 4h16M7 14h.013m2.997 0h.005m2.995 0h.005m3 0h.005m-3.005 3h.005m-6.01 0h.005m2.995 0h.005"/></svg> Upcoming
                </button>
                <button className={`btn-nav ${currentMissionType === 'past' ? 'active-style' : ''}`} onClick={() => onMissionTypeChange('past')} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-history mr-2" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M12 8v4l2 2"/><path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5"/></svg> Past Launches
                </button>
            </nav>

            <nav className="p-4 space-y-2 border-b border-surface-light text-primary-lighter/65 dark:border-surface-dark dark:text-text-dark/65">
                <h3 className="text-xs font-bold uppercase tracking-widest text-text-light-muted dark:text-gray-500">Filters</h3>
                <FilterButton label="Successful" isActive={filters.successful} onClick={() => onFilterChange('successful')} />
                <FilterButton label="Failed" isActive={filters.failed} onClick={() => onFilterChange('failed')} />
            </nav>

            {/* Profile */}
            <div className="p-4 border-t border-surface-light dark:border-surface-dark mt-auto flex justify-between">
                <div className="flex items-center gap-3">
                <div className="size-10 rounded-full overflow-hidden hover:scale-120 transition-transform duration-300">
                <img src="John_Titor.jpg" alt="John's Profile Image" className="size-full scale-130 hover:scale-150 transition-transform duration-300"/>
                </div>
                <div>
                    <p className="text-sm font-medium text-primary-light dark:text-text-dark">John Titor</p>
                    <p className="text-xs text-text-light-muted dark:text-neutral-400">Mission Control</p>
                </div>
                </div>         
                <div className="self-center text-primary-light dark:text-text-dark">
                    <ToggleButton />    
                </div>   
            </div>
        </aside>
        </>
    )
}

export default Sidebar