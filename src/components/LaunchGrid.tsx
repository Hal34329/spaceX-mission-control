import type { Launch } from "../types/launch"
import LaunchCard from "./LaunchCard"

type LaunchGridProps = {
    launches: Launch[]
}

const LaunchGrid = ({ launches }: LaunchGridProps) => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {launches.map(launch => (
            <LaunchCard key={launch.id} launch={launch} />
        ))}
        </div>
    )
}

export default LaunchGrid