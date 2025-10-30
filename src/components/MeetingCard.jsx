export default function MeetingCard({
  title,
  host,
  timeLabel = "Now",
  ctaLabel = "JOIN",
  participants = [],
  accent = false,
}) {
  return (
    <div className="bg-light rounded-2xl p-5 shadow-lg flex items-start justify-between">
      <div className="flex items-start gap-3">
        <img
          src={participants[0] || "https://i.pravatar.cc/80?img=5"}
          alt="host"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="text-white font-medium leading-tight">{title}</h4>
          <p className="text-gray-text text-sm leading-tight">{host}</p>
          <div className="mt-3 flex items-center gap-2 text-gray-text text-sm">
            <span className="inline-flex items-center gap-1">⏱ {timeLabel}</span>
            <div className="flex -space-x-2 ml-2">
              {participants.slice(0, 4).map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="member"
                  className="w-6 h-6 rounded-full border border-dark object-cover"
                />
              ))}
              {participants.length > 4 && (
                <span className="text-xs text-gray-text ml-3">+{participants.length - 4} more</span>
              )}
            </div>
          </div>
        </div>
      </div>
      <button
        className={`${
          accent ? "bg-primary text-white" : "bg-dark text-gray-text"
        } px-4 py-2 rounded-xl text-sm font-semibold hover:opacity-90`}
      >
        {ctaLabel}
      </button>
    </div>
  );
}


