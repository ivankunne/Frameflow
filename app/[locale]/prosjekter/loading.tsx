export default function ProsjekterLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="pt-28 pb-14 px-6 lg:px-8 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="w-24 h-6 bg-fg/8 rounded-full" />
          <div className="w-72 h-12 bg-fg/8 rounded-xl" />
          <div className="w-80 h-5 bg-fg/6 rounded-lg" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="py-16 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="bg-bg border border-border rounded-xl overflow-hidden shadow-card">
              {/* Mockup area */}
              <div className="h-44 bg-fg/6" />
              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="w-20 h-4 bg-fg/8 rounded-full" />
                <div className="w-3/4 h-6 bg-fg/10 rounded-lg" />
                <div className="w-full h-4 bg-fg/6 rounded" />
                <div className="w-5/6 h-4 bg-fg/5 rounded" />
                <div className="flex gap-2 pt-1">
                  <div className="w-16 h-5 bg-fg/8 rounded-full" />
                  <div className="w-16 h-5 bg-fg/6 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
