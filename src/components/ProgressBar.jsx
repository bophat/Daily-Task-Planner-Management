export default function ProgressBar({ progress }) {
  return (
    <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
      <div
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
