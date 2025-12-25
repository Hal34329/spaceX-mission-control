// Intended to use with TailwindCSS
import { useState } from "react";
// type ToggleButtonProps = {
//     hover?: string
// }
// original prop: { hover = "white/5" }:ToggleButtonProps
// original className={`p-2 rounded-md transition hover:bg-${hover}`}

const ToggleButton = () => {
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
        <button onClick={toggleTheme} className="p-2 rounded-md transition hover:bg-white/5"> 
                {theme === "dark" ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-sun size-5" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0m-5 0h1m8-9v1m8 8h1m-9 8v1M5.6 5.6l.7.7m12.1-.7-.7.7m0 11.4.7.7m-12.1-.7-.7.7"/></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="icon icon-tabler icons-tabler-outline icon-tabler-moon size-5" viewBox="0 0 24 24"><path fill="none" stroke="none" d="M0 0h24v24H0z"/><path d="M12 3h.393a7.5 7.5 0 0 0 7.92 12.446A9 9 0 1 1 12 2.992z"/></svg>
                )}
        </button>
    )
}

export default ToggleButton