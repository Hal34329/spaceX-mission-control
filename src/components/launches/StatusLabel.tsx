type StatusProps = {
    success: boolean | null
    upcoming: boolean | null
}

const StatusLabel = ({ success, upcoming }: StatusProps) => {
  const getStatus = () => {
    if (upcoming === true) return "upcoming";
    if (success === true) return "success";
    if (success === false) return "failed";
    return "unknown";
  };

  const status = getStatus();

  const statusConfig = {
    upcoming: {
      text: "Upcoming",
      classes: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    success: {
      text: "Success",
      classes: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    },
    failed: {
      text: "Failed",
      classes: "bg-red-500/10 text-red-500 border-red-500/20",
    },
    unknown: {
      text: "Unknown",
      classes: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
    },
  };

  const { text, classes } = statusConfig[status];

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${classes}`}>
      {text}
    </span>
  );
};

export default StatusLabel