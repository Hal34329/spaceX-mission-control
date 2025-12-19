import { useEffect, useState } from "react";
import type { Launch } from "../types/launch";

export function useLaunches() {
    const [launches, setLaunches] = useState<Launch[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.spacexdata.com/v4/launches');
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

    return { launches, loading, error }
}