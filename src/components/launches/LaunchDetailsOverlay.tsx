import type { Launch } from "../../types/launch"
import StatusLabel from "./StatusLabel"
import { formatDate } from "../../utils/formatDate"

type Props = {
    launch: Launch
    onClose: () => void
}

const LaunchDetailsOverlay = ({ launch, onClose }: Props) => {
    const getYoutubeEmbed = (url: string) => {
        const id = url.split("v=")[1]
        return `https://www.youtube.com/embed/${id}`
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center animate-fade-in">
            <div className="absolute inset-0 " onClick={onClose} />

            <div className="relative z-10 w-[80vw] h-[90vh] max-w-6xl dark:bg-surface-dark rounded-xl flex flex-col animate-slide-up" role="dialog" aria-labelledby="modal-title" aria-modal="true">
                <header className="px-6 py-4 border-b border-neutral-800 flex items-center shrink-0 gap-6"> {/* justify between */}
                    <div className="flex flex-col">
                    <h2 className="text-xl font-bold leading-tight" id="modal-title">
                        {launch.name}
                    </h2>
                    <time dateTime={launch.date_utc} className="text-xs dark:text-text-dark-muted font-medium">
                        {formatDate(launch.date_utc, launch.upcoming)}
                    </time>
                    </div>
                    <StatusLabel success={launch.success} upcoming={launch.upcoming} />
                    <button onClick={onClose} className="absolute right-4 m-3 cursor-pointer font-black" aria-label="close-modal">
                        ✕
                    </button>
                </header>

                <main className="flex flex-col flex-1 min-h-0 overflow-hidden">
                    <section className="flex-1 min-h-0 w-full flex items-center justify-center pb-6">
                        <div className="w-full max-w-4xl max-h-full aspect-video">
                        {launch.links.webcast && (
                            <iframe className="w-full h-full rounded-lg" src={getYoutubeEmbed(launch.links.webcast)} allowFullScreen />
                        )}
                        </div>
                    </section>
                    <article className="shrink-0 max-h-[30%] px-6 pb-6 mt-auto">
                        <div className="relative overflow-y-auto max-h-full dark:bg-surface-darker/40 p-4 rounded-lg group">            
                            <div className="pr-8"> 
                            <p className="text-sm dark:text-text-dark">
                                {launch.details ?? "No details available."}
                            </p>
                            </div>

                            {launch.links.article && (
                            <div className="sticky bottom-0 right-0 flex justify-end mt-2">
                                <a href={launch.links.article} target="_blank" rel="noreferrer" className="dark:bg-surface-darker/50 p-2 rounded-full dark:hover:bg-emerald-splash/50 transition-colors"> 
                                {/* Whatever SVG that gets used */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="dark:text-primary-dark" viewBox="0 0 97.75 97.75"><path d="M48.875 0C21.883 0 0 21.883 0 48.875S21.883 97.75 48.875 97.75 97.75 75.867 97.75 48.875 75.867 0 48.875 0..." /></svg>
                                </a>
                            </div>
                            )}
                        </div>
                    </article>
                </main>
            </div>
        </div>
    )
}

export default LaunchDetailsOverlay