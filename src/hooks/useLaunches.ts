import { useEffect, useState } from "react";
import type { Launch } from "../types/launch";
import { sleep } from "../utils/sleep";

export function useLaunches() {
    const [launches, setLaunches] = useState<Launch[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        const fetchData = async () => {
            try {
                await sleep(800);
                const response = await fetch('https://api.spacexdata.com/v4/launches', {signal});

                if(!response.ok) throw new Error('Network response was not ok');

                const data = await response.json();
                setLaunches(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    if (error.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setError('Failed to fetch launches');
                    } 
                }
            } finally {
                setLoading(false);
            }
        }
        fetchData();

        return () => controller.abort();
    }, []);

    return { launches, loading, error }
}