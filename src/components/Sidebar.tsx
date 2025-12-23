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
            {/* Header */}
            <div className="flex items-center gap-2 m-4 dark:border-neutral-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-rocket size-10 text-primary" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M4 13a8 8 0 0 1 7 7 6 6 0 0 0 3-5 9 9 0 0 0 6-8 3 3 0 0 0-3-3 9 9 0 0 0-8 6 6 6 0 0 0-5 3"/><path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3m4-8a1 1 0 1 0 2 0 1 1 0 1 0-2 0"/></svg>
                {/* { theme === "dark" ? (
                    <div className="h-10 -translate-y-3">
                    <svg fill="currentColor" width="800px" height="800px" viewBox="0 0 24 24" role="img" className="size-16 text-logo-dark" xmlns="http://www.w3.org/2000/svg"><title>SpaceX icon</title><path d="M24 7.417C8.882 8.287 1.89 14.75.321 16.28L0 16.583h2.797C10.356 9.005 21.222 7.663 24 7.417zm-17.046 6.35c-.472.321-.945.68-1.398 1.02l2.457 1.796h2.778zM2.948 10.8H.189l3.25 2.381c.473-.321 1.02-.661 1.512-.945Z"/></svg>
                    </div>
                ) : (
                    <div className="h-10 -translate-y-3">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Layer_1" width="107.972" height="40.825" className="size-16" x="0" y="0" viewBox="0 0 107.972 40.825"><g id="g4598" transform="translate(-2.12 3.423)"><path id="path4559" d="M15.173 11.565H3.622l-.627 1.193 12.828 9.35a129 129 0 0 1 7.95-4.24" fill="#005288"/><path id="path4561" d="m25.523 29.18 11.275 8.222H48.49l.484-1.09L32.138 23.99a132 132 0 0 0-6.615 5.19" fill="#005288"/><path id="path4563" d="M13.454 37.383H3.003L2.12 36C9.226 29.139 41.008-.272 110.092-3.423c0 0-57.986 1.956-96.638 40.806" fill="#a7a9ac"/></g></svg>
                    </div>
                )
                } */}

                <span>
                    <h1 className="font-bold">SPACEX</h1>
                    <h2 className="text-primary dark:text-primary-dark text-sm">DATA</h2>
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