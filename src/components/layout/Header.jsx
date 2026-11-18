import React from 'react';
import { Search, Bell } from 'lucide-react';

export default function Header({
  activeNav,
  setActiveNav,
  searchQuery,
  setSearchQuery,
  overdueCount,
  unreadCount
}) {
  const tabs = [
    { id: 'home', label: 'Overview' },
    { id: 'saved', label: 'Saved' },
    { id: 'tasks', label: 'Tasks', count: overdueCount },
    { id: 'messages', label: 'Messages', count: unreadCount }
  ];

  return (
    <header className="flex flex-wrap items-center justify-between gap-4 mb-5">
      {/* Navigation Pills */}
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur border border-black/5 rounded-full p-1 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveNav(tab.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
              activeNav === tab.id
                ? 'bg-[#18181B] text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            <span>{tab.label}</span>
            {tab.count > 0 && (
              <span
                className={`px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                  activeNav === tab.id
                    ? 'bg-[#FF6B57] text-white'
                    : 'bg-[#FF6B57]/15 text-[#FF6B57]'
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Search & Notification Bell */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search deals, tasks, calls..."
            className="pl-9 pr-4 py-2 bg-white rounded-full text-xs border border-black/5 focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/30 w-56 md:w-64 shadow-sm"
          />
        </div>
        <button
          onClick={() => setActiveNav('tasks')}
          className="w-9 h-9 rounded-full bg-white border border-black/5 flex items-center justify-center text-zinc-600 hover:text-zinc-900 shadow-sm relative transition-colors"
          title="Notifications"
        >
          <Bell size={16} />
          <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-[#FF6B57]" />
        </button>
      </div>
    </header>
  );
}
