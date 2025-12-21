const Sidebar = () => {
    return(
        <>
        <aside className="w-64 shrink-0 bg-neutral-900 border-r border-neutral-800 sticky top-0 h-screen flex flex-col">
            {/* Navigation / Filters */}
            <nav className="p-4 space-y-2 border-b border-neutral-800">
                <h3>MAIN MENU</h3>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                All missions
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                Upcoming
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                Past Launches
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                Rockets
                </button>
            </nav>

            <nav className="p-4 space-y-2 border-b border-neutral-800">
                <h3>FILTERS</h3>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                Successful
                </button>
                <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-neutral-800">
                Failed
                </button>
            </nav>

            {/* Profile / Header */}
            <div className="p-4 border-t border-neutral-800 mt-auto">
                <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-700" />
                <div>
                    <p className="text-sm font-medium">Guest User</p>
                    <p className="text-xs text-neutral-400">Mission Control</p>
                </div>
                </div>
            </div>
        </aside>
        </>
    )
}

export default Sidebar