import { useState } from "react";
import { useTheme } from "./ThemeContext";
import { useAuth } from "./AuthContext";

export default function Header({ onOpenMenu }) {
  const { isDark, toggle } = useTheme();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(null); // "notif" | "message" | null

  const menuBase = "absolute right-0 mt-2 w-72 rounded-xl shadow-xl border border-white/5 z-20";
  const menuColors = isDark ? "bg-light text-white" : "bg-white text-gray-900";

  return (
    <header className="flex justify-between items-center relative">
      {/* Mobile brand bar */}
      <div className="flex items-center gap-3 md:hidden">
        <button className="bg-dark hover:bg-gray-800 rounded-lg p-2" aria-label="Open menu" onClick={onOpenMenu}>☰</button>
        <span className="text-xl font-bold">ZIDIO</span>
      </div>
      {/* Desktop greeting */}
      <div className="hidden md:block">
        <h2 className="text-2xl font-bold">Hi, Amanda 👋</h2>
        <p className="text-gray-text">Good morning!</p>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search..."
          className={
            (isDark ? "bg-light text-gray-text" : "bg-gray-100 text-gray-700") +
            " px-4 py-2 rounded-lg focus:outline-none w-36 md:w-60 hidden sm:block"
          }
        />

        {/* Message */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => (v === "message" ? null : "message"))}
            className="relative bg-dark hover:bg-gray-800 rounded-full p-2"
            aria-label="Messages"
          >
            <span>💬</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">3</span>
          </button>
          {open === "message" && (
            <div className={`${menuBase} ${menuColors}`}>
              <div className="p-3 font-semibold">Messages</div>
              <ul className="divide-y divide-white/5">
                {[
                  { name: "Alex", text: "Let’s review the wireframes" },
                  { name: "Perry", text: "Updated palette uploaded" },
                  { name: "Sam", text: "Standup moved to 10:30" },
                ].map((m, i) => (
                  <li key={i} className="p-3 hover:bg-white/5">
                    <p className="text-sm">
                      <span className="font-medium">{m.name}: </span>
                      {m.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setOpen((v) => (v === "notif" ? null : "notif"))}
            className="relative bg-dark hover:bg-gray-800 rounded-full p-2"
            aria-label="Notifications"
          >
            <span>🔔</span>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full px-1">5</span>
          </button>
          {open === "notif" && (
            <div className={`${menuBase} ${menuColors}`}>
              <div className="p-3 font-semibold">Notifications</div>
              <ul className="divide-y divide-white/5">
                {[
                  "New comment on Mobile App task",
                  "Design sync starts in 10 minutes",
                  "You were added to Project Alpha",
                ].map((t, i) => (
                  <li key={i} className="p-3 text-sm hover:bg-white/5">{t}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          className="bg-dark hover:bg-gray-800 rounded-full px-3 py-2 text-sm"
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          {isDark ? "🌙" : "☀️"}
        </button>

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full border border-gray-600"
          />
          {user && (
            <button onClick={logout} className="hidden sm:inline bg-dark hover:bg-gray-800 rounded-lg px-3 py-2 text-sm">Logout</button>
          )}
        </div>
      </div>
    </header>
  );
}
