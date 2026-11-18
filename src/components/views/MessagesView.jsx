import React from 'react';
import { Phone, Mail, Send, ArrowUpRight } from 'lucide-react';

export default function MessagesView({
  threads,
  setThreads,
  activeThread,
  activeThreadId,
  setActiveThreadId,
  msgFilter,
  setMsgFilter,
  draftMessage,
  setDraftMessage,
  handleSendMessage
}) {
  const filterOptions = ['All', 'Unread', 'Deals'];

  const handleSelectThread = (threadId) => {
    setActiveThreadId(threadId);
    setThreads((prev) =>
      prev.map((item) => (item.id === threadId ? { ...item, unread: false } : item))
    );
  };

  return (
    <div className="flex flex-col gap-4 flex-1">
      {/* Header & Filter Pills */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Messages</h1>
        <div className="flex items-center gap-2">
          {filterOptions.map((f) => (
            <button
              key={f}
              onClick={() => setMsgFilter(f)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                msgFilter === f ? 'bg-[#18181B] text-white' : 'bg-white text-zinc-600 hover:bg-zinc-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 flex-1 min-h-[520px]">
        {/* Left Thread List */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-[24px] p-4 shadow-sm border border-black/[0.03] flex flex-col gap-2">
          {threads
            .filter((t) => (msgFilter === 'Unread' ? t.unread : true))
            .map((th) => (
              <div
                key={th.id}
                onClick={() => handleSelectThread(th.id)}
                className={`p-3 rounded-2xl cursor-pointer transition-all flex items-start gap-3 ${
                  activeThread.id === th.id ? 'bg-[#F6F5F2]' : 'hover:bg-[#F6F5F2]/50'
                }`}
              >
                <img
                  src={th.avatar}
                  alt={th.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-zinc-900 truncate">{th.name}</span>
                    <span className="text-[10px] text-zinc-400">{th.time}</span>
                  </div>
                  <div className="text-[11px] text-[#FF6B57] font-medium flex items-center justify-between">
                    <span>{th.company} · {th.dealValue}</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">{th.phone}</span>
                  </div>
                  <p className="text-[11px] text-zinc-500 truncate mt-0.5">{th.preview}</p>
                </div>
                {th.unread && <span className="w-2 h-2 rounded-full bg-[#FF6B57] mt-1.5" />}
              </div>
            ))}
        </div>

        {/* Center Conversation Pane */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03] flex flex-col justify-between">
          <div className="flex items-center justify-between pb-3 border-b border-zinc-100">
            <div className="flex items-center gap-3">
              <img
                src={activeThread.avatar}
                alt={activeThread.name}
                className="w-9 h-9 rounded-full object-cover"
              />
              <div>
                <div className="text-xs font-bold text-zinc-900 flex items-center gap-2">
                  <span>{activeThread.name}</span>
                  <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                    {activeThread.phone}
                  </span>
                </div>
                <div className="text-[11px] text-zinc-400">
                  {activeThread.role} · {activeThread.company} · {activeThread.dealValue}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${activeThread.phone}`}
                className="p-2 rounded-full bg-[#F6F5F2] text-zinc-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
                title={`Call ${activeThread.phone}`}
              >
                <Phone size={14} />
              </a>
              <a
                href={`mailto:${activeThread.name.toLowerCase().replace(' ', '.')}@${activeThread.company.toLowerCase().replace(/\s+/g, '')}.com.bd`}
                className="p-2 rounded-full bg-[#F6F5F2] text-zinc-600 hover:text-zinc-900 transition-colors"
                title="Email"
              >
                <Mail size={14} />
              </a>
            </div>
          </div>

          <div className="flex-1 py-4 space-y-3 overflow-y-auto max-h-[360px]">
            {activeThread.messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'me' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[82%] px-4 py-2.5 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'me'
                      ? 'bg-gradient-to-r from-[#FF6B57] to-[#FF856D] text-white rounded-br-sm'
                      : 'bg-[#F6F5F2] text-zinc-800 rounded-bl-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-zinc-400 mt-1 px-1">{m.time}</span>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSendMessage}
            className="pt-3 border-t border-zinc-100 flex items-center gap-2"
          >
            <input
              type="text"
              value={draftMessage}
              onChange={(e) => setDraftMessage(e.target.value)}
              placeholder={`Message ${activeThread.name}...`}
              className="flex-1 bg-[#F6F5F2] rounded-full px-4 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/30"
            />
            <button
              type="submit"
              className="w-9 h-9 rounded-full bg-[#FF6B57] text-white flex items-center justify-center hover:bg-[#e85d49] transition-colors"
              title="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>

        {/* Right Contact & Deal CRM Context */}
        <div className="col-span-12 lg:col-span-3 bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03] flex flex-col justify-between">
          <div className="text-center">
            <img
              src={activeThread.avatar}
              alt={activeThread.name}
              className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-emerald-500/20"
            />
            <h3 className="text-sm font-bold text-zinc-900 mt-2">{activeThread.name}</h3>
            <p className="text-xs text-zinc-400">
              {activeThread.role} at {activeThread.company}
            </p>

            {/* Bangladeshi Phone Number Pill */}
            <div className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
              <Phone size={12} />
              <span>{activeThread.phone}</span>
            </div>

            <div className="mt-4 text-left p-4 rounded-2xl bg-[#F6F5F2]">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-semibold text-zinc-400">
                  Active Deal
                </span>
                <span className="text-xs font-bold text-[#FF6B57]">
                  {activeThread.stage}
                </span>
              </div>
              <div className="text-2xl font-bold text-zinc-900 mt-1">
                {activeThread.dealValue}
              </div>
              <div className="text-xs text-zinc-600 mt-0.5">
                {activeThread.company} — Enterprise Annual
              </div>
              <div className="w-full h-1.5 bg-white rounded-full overflow-hidden mt-3">
                <div className="w-3/4 h-full bg-[#FF6B57] rounded-full" />
              </div>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="text-xs font-bold text-zinc-900">Shared files</div>
            <div className="p-2.5 rounded-xl bg-[#F6F5F2] text-xs flex items-center justify-between hover:bg-zinc-200/60 cursor-pointer transition-colors">
              <span className="truncate">Pathao_Order_Form_Q4_Dhaka.pdf</span>
              <ArrowUpRight size={13} className="text-zinc-400 shrink-0" />
            </div>
            <div className="p-2.5 rounded-xl bg-[#F6F5F2] text-xs flex items-center justify-between hover:bg-zinc-200/60 cursor-pointer transition-colors">
              <span className="truncate">SOC2_Compliance_Bangladesh.pdf</span>
              <ArrowUpRight size={13} className="text-zinc-400 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
