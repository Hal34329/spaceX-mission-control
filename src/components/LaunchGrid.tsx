import type { Launch } from "../types/launch"
import LaunchCard from "./LaunchCard"

type LaunchGridProps = {
    launches: Launch[]
}

const LaunchGrid = ({ launches }: LaunchGridProps) => {
    return(
        <div className="grid">
            {launches.map(launch => (
            <LaunchCard key={launch.id} launch={launch} />
        ))}
        </div>
    )
}

export default LaunchGrid