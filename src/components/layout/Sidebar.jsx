import React from 'react';
import {
  Home,
  Bookmark,
  CheckSquare,
  MessageSquare,
  Users,
  BarChart2,
  Folder,
  Settings
} from 'lucide-react';

export default function Sidebar({ activeNav, setActiveNav, overdueCount, unreadCount }) {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home (Sales Overview)' },
    { id: 'saved', icon: Bookmark, label: 'Saved Items' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', badge: overdueCount },
    { id: 'messages', icon: MessageSquare, label: 'Messages', badge: unreadCount },
    { id: 'team', icon: Users, label: 'Team' },
    { id: 'analytics', icon: BarChart2, label: 'Analytics' },
    { id: 'files', icon: Folder, label: 'Collections' }
  ];

  const handleNavClick = (id) => {
    if (['home', 'saved', 'tasks', 'messages'].includes(id)) {
      setActiveNav(id);
    } else {
      setActiveNav('home');
    }
  };

  return (
    <aside className="w-14 bg-[#18181B] text-white rounded-[28px] py-4 flex flex-col items-center justify-between shrink-0 shadow-xl">
      {/* Top brand dot & nav buttons */}
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={() => setActiveNav('home')}
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#FF6B57] to-[#FF856D] flex items-center justify-center shadow-md transition-transform hover:scale-105"
          title="Sales CRM Bangladesh"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-white" />
        </button>

        <nav className="flex flex-col items-center gap-2 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                title={item.label}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                  isActive
                    ? 'bg-[#FF6B57] text-white shadow-lg shadow-[#FF6B57]/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon size={18} />
                {item.badge > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-[#FF6B57] border-2 border-[#18181B] text-[9px] font-bold flex items-center justify-center text-white">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom settings & profile avatar */}
      <div className="flex flex-col items-center gap-2">
        <button
          className="w-10 h-10 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          title="Settings"
        >
          <Settings size={18} />
        </button>
        <button
          className="w-8 h-8 rounded-full overflow-hidden border border-white/20 mt-1"
          title="Asif Hossain (Dhaka HQ)"
        >
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
            alt="Asif Hossain"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </aside>
  );
}
