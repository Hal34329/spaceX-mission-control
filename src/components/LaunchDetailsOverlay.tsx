import type { Launch } from "../types/launch"

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
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
        <div className="absolute inset-0" onClick={onClose} />

        {/* modal */}
        <div className="relative z-10 w-[80vw] h-[90vh] max-w-6xl dark:bg-surface-dark rounded-xl flex flex-col">
            {/* Header */}
            <div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center shrink-0">
                <h2 className="text-xl font-bold">
                {launch.name}
                </h2>

                <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
                ✕
                </button>
            </div>

            <div className="flex flex-col flex-1 min-h-0 overflow-hidden">
            {/* content */}
            <div className="flex-1 min-h-0 w-full flex items-center justify-center pb-6">
                <div className="w-full max-w-4xl max-h-full aspect-video">
                {launch.links.webcast && (
                    <iframe className="w-full h-full rounded-lg" src={getYoutubeEmbed(launch.links.webcast)} allowFullScreen />
                )}
                </div>
            </div>

            {/* Details container */}
            <div className="shrink-0 max-h-[30%] px-6 pb-6 mt-auto">
                <div className="relative overflow-y-auto max-h-full bg-surface-darker/40 p-4 rounded-lg group">            
                    <div className="pr-8"> 
                    <p className="text-sm text-neutral-300">
                        {launch.details ?? "No details available."}
                    </p>
                    </div>

                    {launch.links.article && (
                    <div className="sticky bottom-0 right-0 flex justify-end mt-2">
                        <a href={launch.links.article} target="_blank" rel="noreferrer" className="dark:bg-surface-darker/50 p-2 rounded-full dark:hover:bg-emerald-splash/50 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" id="Capa_1" width="800" height="800" fill="currentColor" className="size-5 text-primary-dark" viewBox="0 0 97.75 97.75"><path d="M48.875 0C21.883 0 0 21.883 0 48.875S21.883 97.75 48.875 97.75 97.75 75.867 97.75 48.875 75.867 0 48.875 0m28.816 37.503c-2.779 6.28-11.279 26.171-16.951 39.136a92 92 0 0 1-1.49-.005l-8.945-21.069c-3.545 6.953-7.473 14.181-10.832 21.059-.02.035-1.625.016-1.627-.006-5.135-11.986-10.459-23.893-15.621-35.87-1.195-2.928-5.387-7.637-8.256-7.61 0-.34-.016-1.099-.02-1.558l17.682-.002-.014 1.531c-2.076.096-5.664 1.421-4.734 3.713 2.492 5.381 11.316 26.227 13.701 31.519 1.664-3.257 6.311-11.939 8.225-15.609-1.5-3.078-6.457-14.57-7.943-17.464-1.121-1.887-3.934-2.118-6.1-2.151 0-.483.025-.855.016-1.518l15.543.048v1.412c-2.104.058-4.096.841-3.193 2.853 2.091 4.34 3.312 7.43 5.231 11.444.613-1.176 3.755-7.622 5.253-11.024.905-2.262-.447-3.109-4.232-3.211.05-.372.017-1.119.05-1.475l13.424.013.006 1.401c-2.467.096-5.021 1.41-6.354 3.45l-6.464 13.406c.709 1.773 6.924 15.58 7.578 17.111L74.988 36.18c-.951-2.497-3.984-3.055-5.17-3.082.008-.398.01-1.005.012-1.512l13.951.04.02.07-.023 1.394c-3.061.093-4.954 1.73-6.087 4.413"/></svg>
                        </a>
                    </div>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LaunchDetailsOverlay