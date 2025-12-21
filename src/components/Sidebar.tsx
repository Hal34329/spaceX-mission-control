const Sidebar = () => {
    const toggleTheme = () => {
        const root = document.documentElement;

        if(root.classList.contains("dark")){
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    }

    return(
        <>
        <aside className="w-64 shrink-0 bg-neutral-900 border-r border-neutral-800 sticky top-0 h-screen flex flex-col">
            {/* Navigation / Filters */}
            <nav className="p-4 space-y-2 border-b border-neutral-800">
                <h3>MAIN MENU</h3>
                <button className="btn-nav">
                All missions
                </button>
                <button className="btn-nav">
                Upcoming
                </button>
                <button className="btn-nav">
                Past Launches
                </button>
                <button className="btn-nav">
                Rockets
                </button>
            </nav>

            <nav className="p-4 space-y-2 border-b border-neutral-800">
                <h3>FILTERS</h3>
                <button className="btn-nav">
                Successful
                </button>
                <button className="btn-nav">
                Failed
                </button>
            </nav>

            <button className="btn-filter" onClick={toggleTheme}>Color</button>

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