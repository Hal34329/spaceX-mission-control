import { useEffect, useState } from "react"

const LoadingState = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 90) return p
        return p + Math.random() * 10
      })
    }, 35)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-2rem)] gap-6">
      <div className="relative size-16">
        <div className="absolute inset-0 rounded-full border-4 border-smoke-splash dark:border-emerald-splash" />     
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-smoke-gray dark:border-t-emerald-green animate-spin" />
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold">Acquiring Telemetry</p>
        <p className="text-sm text-text-light-muted dark:text-text-dark-muted mt-1">
          Connecting to SpaceX API...
        </p>
      </div>

      <div className="w-64 h-2 rounded-full bg-smoke-splash dark:bg-emerald-splash overflow-hidden">
        <div
          className="h-full bg-smoke-gray dark:bg-emerald-green transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}

export default LoadingState
