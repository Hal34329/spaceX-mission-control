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
        <div onClick={onClick} className="flex flex-col p-4 dark:bg-surface-dark rounded-xl cursor-pointer">
            <div className="flex justify-between items-start w-full">
                <div className="shrink-0 dark:bg-text-dark-muted/10 rounded-full">
                    <img className={`h-15 object-scale-down p-1 m-2 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} src={launch.links.patch.small || "/patch-placeholder.png"} alt={`${launch.name} patch`} onLoad={() => setIsImageLoaded(true)} />
                </div>
            <span className="self-center">
                <StatusLabel success={launch.success} upcoming={launch.upcoming} />
            </span>
            </div>
            <h3 className="text-lg font-bold dark:text-text-dark truncate mt-4">
                {launch.name}
            </h3>
            <h4 className="text-xs dark:text-text-dark-muted flex items-center mt-1 mb-2">
                <span className="dark:bg-emerald-splash rounded-full px-2 border border-solid dark:border-emerald-splash/80">
                    # {launch.flight_number} 
                </span>
                <span className="dark:text-text-dark-muted/50 mx-1 text-bold text-xl leading-none">{" • "} </span>
                {formatDate(launch.date_utc, launch.upcoming)}
            </h4>
            {launch.details ? (
                <p className="dark:text-text-dark-muted line-clamp-3 text-sm">
                    {launch.details}
                </p>) : (
                <p className="dark:text-text-dark-muted italic text-sm">
                    No details available for this launch.
                </p>
            ) }
        </div>
        </>
    )
}

export default LaunchCard