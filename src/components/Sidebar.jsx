import { ReactComponent as Logo } from "../assets/whitelogo.svg?react";

export default function Sidebar({ isMobileOpen = false, onClose = () => {} }) {
  const menu = ["Dashboard", "Projects", "Tasks", "Users", "Calendar", "Create Task"];

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col bg-light w-64 h-screen p-8 sticky top-0">
        {/* <div className="flex items-center gap-2">
          <Logo className="w-42 h-auto text-white" />
        </div> */}
        <h1 className="text-5xl font-bold mb-10 text-center">NuVia</h1>
        <nav className="flex flex-col gap-2 flex-1">
          {menu.map((item, i) => (
            <button
              key={i}
              className={`text-left py-2 px-3 rounded-lg transition ${
                i === 0
                  ? "bg-primary text-white"
                  : "text-gray-text hover:bg-primary/20"
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        <div className="bg-primary/10 p-4 rounded-xl text-sm text-gray-text">
          <p>Having Trouble in Learning?</p>
          <button className="bg-primary w-full mt-3 py-2 rounded-lg text-white text-sm">
            Go To Help Center
          </button>
        </div>
      </aside>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <aside className="absolute left-0 top-0 h-full w-72 bg-light p-6 shadow-xl flex flex-col" role="dialog" aria-modal="true">
            <div className="flex items-center justify-between mb-6">
              <Logo className="w-24 h-auto text-white" />
              <button
                className="bg-dark hover:bg-gray-800 rounded-lg px-3 py-2"
                onClick={onClose}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>
            <nav className="flex flex-col gap-2 flex-1">
              {menu.map((item, i) => (
                <button
                  key={i}
                  className={`text-left py-2 px-3 rounded-lg transition ${
                    i === 0
                      ? "bg-primary text-white"
                      : "text-gray-text hover:bg-primary/20"
                  }`}
                  onClick={onClose}
                >
                  {item}
                </button>
              ))}
            </nav>
            <div className="bg-primary/10 p-4 rounded-xl text-sm text-gray-text">
              <p>Having Trouble in Learning?</p>
              <button
                className="bg-primary w-full mt-3 py-2 rounded-lg text-white text-sm"
                onClick={onClose}
              >
                Go To Help Center
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
