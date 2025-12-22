import { useEffect, useState } from "react";
import type { Launch } from "../types/launch";
import { sleep } from "../utils/sleep";

export function useLaunches() {
    const [launches, setLaunches] = useState<Launch[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                await sleep(800);
                const response = await fetch('https://api.spacexdata.com/v4/launches');
                // const response = await fetch('https://api.spacexdata.com/v4/launchs'); // Simular error
                const data = await response.json();
                setLaunches(data);
            } catch (error) {
                setError('Failed to fetch launchers');
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return { launches, loading, error, refetch: useLaunches }
}