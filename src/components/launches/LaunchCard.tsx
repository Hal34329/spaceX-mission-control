import { useState } from "react"
import type { Launch } from "../../types/launch"
import StatusLabel from "./StatusLabel"
import { formatDate } from "../../utils/formatDate"

type LaunchCardProps = {
  launch: Launch
  onClick: () => void
}

const LaunchCard = ({ launch, onClick }: LaunchCardProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    return ( 
        <>
        <div onClick={onClick} className="flex flex-col p-4 bg-surface-light/80 dark:bg-surface-dark rounded-xl cursor-pointer hover:ring hover:ring-black/95 dark:hover:ring-emerald-green hover:scale-105 transition duration-300 max-w-75 box-content">
            <div className="flex justify-between items-start w-full">
                <div className="shrink-0 bg-text-light-muted/70 dark:bg-text-dark-muted/10 rounded-full">
                    <img className={`h-15 object-scale-down p-1 m-2 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} src={launch.links.patch.small || "/patch-placeholder.png"} alt={`${launch.name} patch`} onLoad={() => setIsImageLoaded(true)} />
                </div>
            <span className="self-center">
                <StatusLabel success={launch.success} upcoming={launch.upcoming} />
            </span>
            </div>
            <h3 className="text-lg font-bold text-primary-light dark:text-text-dark truncate mt-4">
                {launch.name}
            </h3>
            <h4 className="text-xs text-primary-light/80 dark:text-text-dark-muted flex items-center mt-1 mb-2">
                <span className="bg-black/30 dark:bg-emerald-splash rounded-full px-2 border border-solid border-black/65 dark:border-emerald-splash/80">
                    # {launch.flight_number} 
                </span>
                <span className="dark:text-text-dark-muted/50 mx-1 text-bold text-xl leading-none">{" • "} </span>
                {formatDate(launch.date_utc, launch.upcoming)}
            </h4>
            {launch.details ? (
                <p className="text-primary-light/80 dark:text-text-dark-muted line-clamp-3 text-sm">
                    {launch.details}
                    {launch.details.length < 55 && (
                        <span className="italic">. Click for more details.</span>
                    )}
                </p>) : (
                <p className="text-primary-light/80 dark:text-text-dark-muted italic text-sm">
                    There are no detailed mission descriptions available for this launch.
                </p>
            ) }
        </div>
        </>
    )
}

export default LaunchCard