import ProgressBar from "./ProgressBar";

export default function TaskCard({ title, progress, duration, details = [], daysLeft }) {
  return (
    <div className="bg-light rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow">
      <img
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=800"
        alt="task"
        className="rounded-xl mb-4 object-cover h-40 w-full"
      />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-gray-text text-sm mb-3">UI / UX Designer</p>

      <div className="flex justify-between text-sm text-gray-text mb-1">
        <span>Progress</span>
        <span>{progress}%</span>
      </div>
      <ProgressBar progress={progress} />

      {duration && (
        <div className="text-sm text-gray-text mt-3 flex items-center gap-2">
          ⏱ <span>{duration}</span>
        </div>
      )}

      {details.length > 0 && (
        <div className="mt-3">
          <h4 className="text-gray-text text-sm mb-2">Detail Task</h4>
          {details.map((d, i) => (
            <div key={i} className="bg-dark px-3 py-2 rounded-lg mb-2 text-sm">
              {i + 1}. {d}
            </div>
          ))}
        </div>
      )}

      {daysLeft && <p className="text-sm text-gray-text mt-2">📅 {daysLeft}</p>}

      <button className="bg-primary text-white w-full mt-4 py-2 rounded-lg font-medium hover:bg-primary/90">
        Go To Detail
      </button>
    </div>
  );
}
