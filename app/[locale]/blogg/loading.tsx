export default function BloggLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="pt-28 pb-14 px-6 lg:px-8 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="w-28 h-6 bg-fg/8 rounded-full" />
          <div className="w-64 h-12 bg-fg/8 rounded-xl" />
          <div className="w-96 h-5 bg-fg/6 rounded-lg" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="py-16 px-6 lg:px-8 bg-bg-2">
        <div className="max-w-7xl mx-auto">
          {/* Featured */}
          <div className="w-full h-56 bg-fg/6 rounded-2xl mb-12" />
          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-bg border border-border rounded-xl p-6 space-y-3 shadow-card">
                <div className="w-16 h-4 bg-fg/8 rounded-full" />
                <div className="w-full h-5 bg-fg/10 rounded-lg" />
                <div className="w-4/5 h-5 bg-fg/8 rounded-lg" />
                <div className="w-full h-3 bg-fg/6 rounded" />
                <div className="w-3/4 h-3 bg-fg/5 rounded" />
                <div className="pt-2 flex justify-between">
                  <div className="w-20 h-3 bg-fg/6 rounded" />
                  <div className="w-12 h-3 bg-fg/6 rounded" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
