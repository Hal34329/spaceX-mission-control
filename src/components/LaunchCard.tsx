import type { Launch } from "../types/launch"

type LaunchCardProps = {
  launch: Launch
  onClick: () => void
}

const LaunchCard = ({ launch, onClick }: LaunchCardProps) => {
  return ( 
    <div 
    onClick={onClick}
    className="w-full sm:w-72 mx-auto bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-2xl max-h-90">
        <div className="shrink-0">
            {launch.links.patch.small ? (
                <img className="w-full h-40 object-scale-down p-1" src={launch.links.patch.small} alt={`${launch.name} patch`} />) : (
                <img className="w-full h-40 object-scale-down p-1" src="/patch-placeholder.png" alt={`${launch.name} patch`} />
            )}
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
    </div> 
  )
}

export default LaunchCard