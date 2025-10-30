export default function RunningTask({ total = 100, running = 65, percent = 45 }) {
  return (
    <div className="bg-[#c4cfe1] text-dark rounded-2xl p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-dark text-base font-medium">Running Task</h3>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-20 h-20">
            <path
              className="text-dark/20"
              stroke="currentColor"
              strokeWidth="3.5"
              fill="none"
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
            />
            <path
              className="text-primary"
              stroke="currentColor"
              strokeWidth="3.5"
              strokeLinecap="round"
              fill="none"
              d="M18 2 a 16 16 0 1 1 0 32 a 16 16 0 1 1 0 -32"
              style={{ strokeDasharray: `${percent}, 100` }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-dark font-semibold">
            {percent}%
          </div>
        </div>
        <div>
          <p className="text-4xl font-bold leading-tight">{running}</p>
          <p className="text-dark/70 text-sm leading-tight">Task</p>
        </div>
      </div>
      <div className="mt-auto text-sm text-dark/80">Total: {total}</div>
    </div>
  );
}


