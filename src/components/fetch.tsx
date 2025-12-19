import { useState, useEffect } from "react"

type Launch = {
  id: string
  name: string
  date_utc: string
  success: boolean | null
  links: {
    patch: {
      small: string | null
      large: string | null
    }
    webcast: string 
    article: string
  }
  upcoming: boolean
  details: string | null
}

const Fetch = () => {
    const [launches, setLaunches] = useState<Launch[]>([])

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
            <pre className="text-xs overflow-auto">
                {JSON.stringify(launches, null, 2)}
            </pre>
        </ul>
    )
}

export default Fetch