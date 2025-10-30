import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskCard from "../components/TaskCard";
import Calendar from "../components/Calendar";
import MeetingCard from "../components/MeetingCard";
import RunningTask from "../components/RunningTask";
import { useState } from "react";

export default function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-dark text-white">
      {/* Sidebar */}
      <Sidebar isMobileOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

      {/* Main Content */}
      <main className="flex-1 px-4 py-6 md:px-6 md:py-8 lg:px-12 lg:py-10 overflow-y-auto">
        <Header onOpenMenu={() => setMobileMenuOpen(true)} />

        {/* 3-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10">
          {/* Left Section */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-8">
            {/* Activity */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Activity</h2>
                  <div className="bg-light h-52 rounded-2xl flex items-center justify-center text-gray-text">
                    (Activity Chart)
                  </div>
                </div>
                <RunningTask total={100} running={65} percent={45} />
              </div>
            </section>

            {/* Meetings today */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Meetings today</h2>
                <div className="hidden md:flex gap-2 text-gray-text text-sm">
                  <button className="bg-dark hover:bg-gray-800 px-3 py-1 rounded-lg">‹</button>
                  <button className="bg-dark hover:bg-gray-800 px-3 py-1 rounded-lg">›</button>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <MeetingCard
                  title="User Personas"
                  host="Alex Pearson"
                  timeLabel="Now"
                  accent
                  participants={[
                    "https://i.pravatar.cc/80?img=32",
                    "https://i.pravatar.cc/80?img=12",
                    "https://i.pravatar.cc/80?img=24",
                    "https://i.pravatar.cc/80?img=45",
                    "https://i.pravatar.cc/80?img=16",
                  ]}
                />
                <MeetingCard
                  title="UI Pallate"
                  host="Matthews Perry"
                  timeLabel="20:00"
                  participants={[
                    "https://i.pravatar.cc/80?img=14",
                    "https://i.pravatar.cc/80?img=28",
                    "https://i.pravatar.cc/80?img=36",
                  ]}
                />
              </div>
            </section>

            {/* Upcoming Tasks */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Upcoming Tasks</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <TaskCard
                  title="Creating Mobile App Design"
                  progress={62}
                  daysLeft="3 Days Left"
                />
                <TaskCard
                  title="Creating Perfect Website"
                  progress={98}
                  daysLeft="4 Days Left"
                />
              </div>
            </section>
          </div>

          {/* Right Section */}
          <aside className="order-1 lg:order-2 space-y-8">
            <Calendar />
            <section>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Task Today</h2>
                <button className="text-gray-text bg-dark hover:bg-gray-800 px-3 py-1 rounded-lg text-sm">•••</button>
              </div>
              <TaskCard
                title="Creating Awesome Mobile Apps"
                progress={90}
                duration="1 Hour"
                details={[
                  "Understanding the tools in Figma",
                  "Understand the basics of making designs",
                ]}
              />
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}
