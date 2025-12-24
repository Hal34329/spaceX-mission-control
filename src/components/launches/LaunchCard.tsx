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
        {/* <div onClick={onClick} className="w-full sm:w-72 mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl max-h-90">
            <div className="shrink-0">
                <img className={`w-full h-40 object-scale-down p-1 transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`} src={launch.links.patch.small || "/patch-placeholder.png"} alt={`${launch.name} patch`} onLoad={() => setIsImageLoaded(true)} />
            </div>
            <div className="p-4 flex flex-col grow bg-linear-to-tr from-slate-700 to-slate-500">
                <h2 className="text-xl font-sans font-semibold text-white">{launch.name}</h2>
                {launch.details ? (<p className="mt-2 font-sans text-gray-200 grow line-clamp-3">
                    {launch.details}
                </p>) : (<p className="mt-2 font-sans text-gray-300 grow italic text-mu">
                    No details available for this launch.
                </p>)}
                
                <div className="mt-4">
                    <button className="px-4 py-2 bg-slate-500 text-white font-medium text-sm rounded-lg hover:bg-slate-400">
                        Learn More
                    </button>
                </div>
            </div>
        </div>  */}

        {/*-------------------------------------------------------------------*/}

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
            <h4 className="text-xs text-text-dark-muted flex items-center mt-1 mb-2">
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
            
            {/* {launch.details ? (<p className="mt-2 font-sans text-gray-200 grow line-clamp-3">
                    {launch.details}
                </p>) : (<p className="mt-2 font-sans text-gray-300 grow italic text-mu">
                    No details available for this launch.
                </p>)} */}
        </div>
        </>
    )
}

export default LaunchCard