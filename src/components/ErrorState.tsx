type ErrorStateProps = {
  message: string
}

const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-2rem)] gap-6 text-center">
      
      {/* Icon */}
      <div className="w-16 h-16 rounded-full bg-emerald-splash flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-emerald-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v2m0 4h.01M5.93 19h12.14a2 2 0 001.74-3l-6.07-10.5a2 2 0 00-3.48 0L4.19 16a2 2 0 001.74 3z"
          />
        </svg>
      </div>

      {/* Text */}
      <div>
        <h2 className="text-xl font-semibold">
          Unable to load launch data
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          {message}
        </p>
      </div>

      {/* Action */} 
        <button
          onClick={() => console.log("Retry to fetch")}
          className="px-5 py-2 rounded-lg bg-emerald-green text-black font-medium hover:bg-emerald-400 transition cursor-pointer"
        >
          Retry
        </button>
    </div>
  )
}

export default ErrorState
