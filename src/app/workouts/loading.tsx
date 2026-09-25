const LoadingCard = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100">
      {/* Image skeleton */}
      <div className="skeleton h-47.5 w-full" />

      <div className="p-5">
        {/* Muscle group badges */}
        <div className="mb-4 flex gap-2">
          <div className="skeleton h-6 w-16 rounded-full" />
          <div className="skeleton h-6 w-14 rounded-full" />
        </div>

        {/* Title */}
        <div className="skeleton h-6 w-3/4" />

        {/* Equipment */}
        <div className="mt-2 skeleton h-4 w-1/2" />

        {/* Divider */}
        <div className="my-4 border-t border-base-300" />

        {/* Stats */}
        <div className="flex items-center justify-between">
          <div className="skeleton h-4 w-16" />
          <div className="skeleton h-4 w-20" />
          <div className="skeleton h-4 w-10" />
        </div>
      </div>
    </div>
  );
};

const WorkoutsLoading = () => {
  return (
    <div className="my-20 mx-5">
      {/* Header */}
      <div className="mx-auto flex flex-col items-center space-y-3">
        <div className="skeleton h-10 w-64" />
        <div className="skeleton h-5 w-80" />
      </div>

      {/* Cards */}
      <div className="mx-5 mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <LoadingCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutsLoading;