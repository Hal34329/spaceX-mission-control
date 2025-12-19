import type { Launch } from "../types/launch"

type LaunchCardProps = {
  launch: Launch
}

const LaunchCard = ({ launch }: LaunchCardProps) => {
  return (
    <div>
      <h3>{launch.name}</h3>
      <p>{new Date(launch.date_utc).toLocaleDateString()}</p>
    </div>
  )
}

export default LaunchCard