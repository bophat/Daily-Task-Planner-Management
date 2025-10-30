import dayjs from "dayjs";

export default function Calendar() {
  const today = dayjs();

  return (
    <div className="bg-light rounded-2xl p-5">
      <div className="flex justify-between items-center mb-4">
        <button>{"<"}</button>
        <span className="font-medium">{today.format("MMMM YYYY")}</span>
        <button>{">"}</button>
      </div>

      <div className="grid grid-cols-7 text-center text-gray-text gap-1 mb-1">
        {["S", "M", "T", "W", "T", "F", "S"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 31 }).map((_, i) => (
          <button
            key={i}
            className={`py-2 rounded-full text-sm ${
              i + 1 === today.date()
                ? "bg-primary text-white"
                : "text-gray-text hover:bg-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
