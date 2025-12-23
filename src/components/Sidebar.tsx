import { useState } from "react";

const Sidebar = () => {
    const toggleTheme = () => {
        const root = document.documentElement;

        if(root.classList.contains("dark")){
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setTheme("light");
        } else {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        }
    }

    const [theme, setTheme] = useState<"light" | "dark">(() => {
        const saved = localStorage.getItem("theme")
        return saved === "dark" ? "dark" : "light"
    })


    return(
        <>
        <aside className="w-64 shrink-0 bg-surface-dark dark:bg-surface-darker border-r border-neutral-800 sticky top-0 h-screen flex flex-col overflow-y-auto">
            <div className="flex items-center gap-2 m-4 dark:border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket size-10" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3"/><path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
                <span>
                    <h1 className="font-bold">SPACEX</h1>
                    <h2 className="text-primary-dark text-sm">DATA</h2>
                </span>
            </div>
            {/* Navigation / Filters */}
            <nav className="p-4 space-y-2 border-y dark:border-neutral-800">
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

            <nav className="p-4 space-y-2 border-b dark:border-neutral-800">
                <h3>FILTERS</h3>
                <button className="btn-nav">
                Successful
                </button>
                <button className="btn-nav">
                Failed
                </button>
            </nav>

            {/* Profile / Header */}
            <div className="p-4 border-t dark:border-neutral-800 mt-auto flex justify-between">
                <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 rounded-full bg-neutral-700" /> */}
                <div className="size-10 rounded-full overflow-hidden hover:scale-120 transition-transform duration-300">
                <img src="John_Titor.jpg" alt="John's Profile Image" className="size-full scale-130 hover:scale-150 transition-transform duration-300"/>
                </div>
                <div>
                    <p className="text-sm font-medium">John Titor</p>
                    <p className="text-xs text-neutral-400">Mission Control</p>
                </div>
                </div>
                <button onClick={toggleTheme} className="p-2 rounded-md hover:bg-white/5 transition">
                {theme === "dark" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-sun size-5" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-moon size-5" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/></svg>
                )}
            </button>
            </div>
        </aside>
        </>
    )
}

export default Sidebar