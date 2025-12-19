import { useEffect } from "react"
import type { Launch } from "../types/launch";

type FetchProps = {
  launches: Launch[];
  setLaunches: React.Dispatch<React.SetStateAction<Launch[]>>;
}

const Fetch = ({ launches, setLaunches }: FetchProps ) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v4/launches');
                const data = await response.json();
                setLaunches(data)
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        fetchData();
    }, []);

    return(
        <ul>
            {/* <pre className="text-xs overflow-auto">
                {JSON.stringify(launches[0], null, 2)}
            </pre> */}
            <ul>
                {launches.map(launch => (
                    <li key={launch.id}>
                        {launch.name}
                    </li>
               
                ))}
            </ul>
        </ul>
    )
}

export default Fetch