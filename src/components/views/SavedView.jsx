import React from 'react';
import {
  Plus,
  X,
  Bookmark,
  FileText,
  Play,
  Pause,
  Folder,
  ChevronRight
} from 'lucide-react';

export default function SavedView({
  savedItems,
  setSavedItems,
  savedTab,
  setSavedTab,
  selectedCollection,
  setSelectedCollection,
  playingAudioId,
  setPlayingAudioId,
  filteredSaved
}) {
  const handleAddNewItem = () => {
    const newItem = {
      id: 's' + Date.now(),
      type: 'Deals',
      variant: 'coral',
      amount: '৳64L',
      badge: 'Pilot · 70%',
      title: 'Grameenphone — Enterprise Rollout',
      subtitle: 'Saved just now · Asif Hossain',
      collection: 'Enterprise Q4'
    };
    setSavedItems((prev) => [newItem, ...prev]);
  };

  const tabs = [
    { id: 'All', label: `All ${savedItems.length}` },
    { id: 'Deals', label: 'Deals 3' },
    { id: 'Docs', label: 'Docs 2' },
    { id: 'Calls', label: 'Calls 2' },
    { id: 'Snippets', label: 'Snippets 2' }
  ];

  const collections = [
    { name: 'Enterprise Q4', count: '12 items' },
    { name: 'Onboarding kit', count: '8 items' },
    { name: 'Proposal templates', count: '5 items' },
    { name: 'Saved by team', count: '19 items' }
  ];

  return (
    <div className="flex flex-col gap-5 flex-1">
      {/* Header & Save Button */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Saved</h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Bookmarked deals, battlecards, call recordings & coaching snippets (Bangladesh)
          </p>
        </div>
        <button
          onClick={handleAddNewItem}
          className="px-4 py-2 rounded-full bg-[#18181B] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-800 transition-colors"
        >
          <Plus size={14} />
          <span>Save item</span>
        </button>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSavedTab(tab.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              savedTab === tab.id
                ? 'bg-[#18181B] text-white'
                : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-black/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
        {selectedCollection && (
          <button
            onClick={() => setSelectedCollection(null)}
            className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#FF6B57]/15 text-[#FF6B57] flex items-center gap-1"
          >
            <span>Collection: {selectedCollection}</span>
            <X size={12} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-12 gap-5">
        {/* 3x3 Saved Cards Grid */}
        <div className="col-span-12 lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filteredSaved.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-3.5 shadow-sm border border-black/[0.03] flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              {/* Top Visual Preview Box */}
              {item.variant === 'coral' && (
                <div className="h-32 rounded-2xl bg-gradient-to-br from-[#FF6B57] to-[#FF856D] p-4 text-white flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <Bookmark size={14} className="fill-white" />
                  </div>
                  <div className="text-3xl font-bold tracking-tight">{item.amount}</div>
                </div>
              )}

              {item.variant === 'dark' && (
                <div className="h-32 rounded-2xl bg-[#18181B] p-4 text-white flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-400 bg-white/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <FileText size={14} className="text-[#FF6B57]" />
                  </div>
                  <div className="space-y-1.5">
                    <div className="w-3/4 h-2 rounded-full bg-white/20" />
                    <div className="w-1/2 h-2 rounded-full bg-white/10" />
                  </div>
                </div>
              )}

              {item.variant === 'video' && (
                <div className="h-32 rounded-2xl bg-zinc-900 p-4 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] bg-black/50 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-zinc-300">{item.duration}</span>
                  </div>
                  <button
                    onClick={() =>
                      setPlayingAudioId(playingAudioId === item.id ? null : item.id)
                    }
                    className="w-10 h-10 rounded-full bg-[#FF6B57] text-white flex items-center justify-center mx-auto my-auto shadow-lg z-10 transition-transform hover:scale-105"
                  >
                    {playingAudioId === item.id ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>
              )}

              {item.variant === 'light' && (
                <div className="h-32 rounded-2xl bg-[#F6F5F2] p-4 flex flex-col justify-between">
                  <span className="text-[10px] font-semibold text-[#FF6B57] uppercase">
                    {item.badge}
                  </span>
                  <p className="text-[11px] text-zinc-600 line-clamp-3 italic">
                    {item.quote}
                  </p>
                </div>
              )}

              {item.variant === 'audio' && (
                <div className="h-32 rounded-2xl bg-[#F6F5F2] p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-zinc-500">
                      {item.badge}
                    </span>
                    <span className="text-[10px] text-zinc-400">{item.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() =>
                        setPlayingAudioId(playingAudioId === item.id ? null : item.id)
                      }
                      className="w-9 h-9 rounded-full bg-[#FF6B57] text-white flex items-center justify-center shrink-0 transition-transform hover:scale-105"
                    >
                      {playingAudioId === item.id ? <Pause size={14} /> : <Play size={14} />}
                    </button>
                    <div className="flex items-end gap-1 flex-1 h-8">
                      {[40, 75, 55, 95, 60, 80, 45, 90, 50, 70, 60, 35].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`flex-1 rounded-full ${
                            playingAudioId === item.id ? 'bg-[#FF6B57] animate-pulse' : 'bg-[#FF6B57]/60'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Card Meta */}
              <div className="pt-3 px-1">
                <div className="text-xs font-bold text-zinc-900 truncate">{item.title}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5 truncate">
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Collections Sidebar */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4">
          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]">
            <h3 className="text-sm font-bold text-zinc-900 mb-3">Collections</h3>
            <div className="space-y-2">
              {collections.map((col) => (
                <button
                  key={col.name}
                  onClick={() =>
                    setSelectedCollection(
                      selectedCollection === col.name ? null : col.name
                    )
                  }
                  className={`w-full flex items-center justify-between p-2.5 rounded-2xl text-left transition-colors ${
                    selectedCollection === col.name
                      ? 'bg-[#FF6B57]/10 text-[#FF6B57]'
                      : 'hover:bg-[#F6F5F2]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Folder size={15} className="text-[#FF6B57]" />
                    <div>
                      <div className="text-xs font-semibold">{col.name}</div>
                      <div className="text-[10px] text-zinc-400">{col.count}</div>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-zinc-400" />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]">
            <h3 className="text-sm font-bold text-zinc-900 mb-3">Recently viewed</h3>
            <div className="space-y-3">
              <div className="text-xs">
                <div className="font-medium text-zinc-800">Chaldal Security Whitepaper (Dhaka DC)</div>
                <div className="text-[11px] text-zinc-400">Opened 14m ago</div>
              </div>
              <div className="text-xs">
                <div className="font-medium text-zinc-800">Q4 Enterprise BDT Discount Matrix</div>
                <div className="text-[11px] text-zinc-400">Opened 2h ago</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
