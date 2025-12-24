type FilterButtonProps = {
    label: string
    isActive: boolean
    onClick: () => void
}

const FilterButton = ({ label, isActive, onClick }: FilterButtonProps) => {
  return (
    <button onClick={onClick} className="btn-nav gap-4 group">
      <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 border-2 ${isActive ? 'bg-primary-light border-primary-light dark:bg-emerald-green dark:border-emerald-splash' : 'bg-transparent group-hover:border-primary-lighter dark:border-gray-600 dark:group-hover:border-gray-400'}`}>
        {isActive && (
          <svg className="w-5 h-5 text-black stroke-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>

      <span className={`font-medium transition-colors ${isActive ? 'text-primary-light dark:text-text-dark' : 'text-text-light-muted group-hover:text-primary-light dark:text-text-dark-muted dark:group-hover:text-text-dark'}`}>
        {label}
      </span>
    </button>
  );
};

export default FilterButton