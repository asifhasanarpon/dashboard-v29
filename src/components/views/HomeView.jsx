import React from 'react';
import { ArrowUpRight, ChevronRight, Phone } from 'lucide-react';

export default function HomeView({
  period,
  setPeriod,
  setActiveNav,
  threads,
  setActiveThreadId,
  selectedDay,
  setSelectedDay
}) {
  return (
    <div className="grid grid-cols-12 gap-5 flex-1">
      {/* Left/Center 8 Columns */}
      <div className="col-span-12 lg:col-span-8 flex flex-col gap-5">
        {/* Hero Card: Close the quarter stronger */}
        <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/[0.03] relative overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-400">
                Q4 Bangladesh Revenue Pulse
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 mt-0.5">
                Close the quarter stronger
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <img
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80"
                  alt="Tanvir Ahmed"
                  title="Tanvir Ahmed"
                />
                <img
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Nusrat Jahan"
                  title="Nusrat Jahan"
                />
                <img
                  className="w-7 h-7 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1628157582853-a796fa650a6a?w=100&auto=format&fit=crop&q=80"
                  alt="Rafiqul Islam"
                  title="Rafiqul Islam"
                />
              </div>
              <div className="bg-[#F6F5F2] rounded-full p-0.5 flex text-[11px] font-medium">
                {['Q3', 'Q4', 'Year'].map((p) => (
                  <button
                    key={p}
                    onClick={() => setPeriod(p)}
                    className={`px-2.5 py-1 rounded-full transition-all ${
                      period === p ? 'bg-[#18181B] text-white' : 'text-zinc-500'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs text-zinc-400 mb-1">Closed revenue ({period})</div>
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold tracking-tight text-zinc-900">
                  {period === 'Q4' ? '৳55.5L' : period === 'Q3' ? '৳48.6L' : '৳1.84 Cr'}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600">
                  +14.2% vs target
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div>
                <div className="text-[11px] text-zinc-400">Win rate</div>
                <div className="text-lg font-bold text-zinc-900">34.8%</div>
              </div>
              <div className="h-8 w-px bg-zinc-100" />
              <div>
                <div className="text-[11px] text-zinc-400">Avg deal size</div>
                <div className="text-lg font-bold text-zinc-900">৳46.2L</div>
              </div>
              <div className="h-8 w-px bg-zinc-100" />
              <button
                onClick={() => setActiveNav('tasks')}
                className="px-4 py-2.5 rounded-full bg-[#18181B] text-white text-xs font-medium hover:bg-zinc-800 transition-colors flex items-center gap-1.5"
              >
                <span>Review pipeline</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Row: Pipeline by stage + Hot leads */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Pipeline by stage */}
          <div className="md:col-span-7 bg-white rounded-[28px] p-6 shadow-sm border border-black/[0.03] flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-sm font-semibold text-zinc-900">Pipeline by stage (BDT)</h2>
                <div className="text-3xl font-bold tracking-tight mt-1">৳53.6L</div>
              </div>
              <span className="text-[11px] text-zinc-400 bg-[#F6F5F2] px-2.5 py-1 rounded-full">
                18 active deals
              </span>
            </div>

            <div className="grid grid-cols-5 gap-3 items-end h-44 mt-6 pt-4">
              {[
                { stage: 'Lead', val: '৳8.4L', h: '50%', active: false },
                { stage: 'Qualified', val: '৳11.8L', h: '68%', active: false },
                { stage: 'Proposal', val: '৳14.2L', h: '82%', active: false },
                { stage: 'Negotiation', val: '৳11.2L', h: '95%', active: true },
                { stage: 'Closing', val: '৳8.0L', h: '60%', active: false }
              ].map((bar) => (
                <div key={bar.stage} className="flex flex-col items-center h-full justify-end gap-2">
                  <span className="text-[10px] font-semibold text-zinc-500">{bar.val}</span>
                  <div
                    style={{ height: bar.h }}
                    className={`w-full rounded-2xl transition-all ${
                      bar.active
                        ? 'bg-gradient-to-t from-[#FF6B57] to-[#FF856D] shadow-md shadow-[#FF6B57]/25'
                        : 'bg-[#F6F5F2] hover:bg-zinc-200/70'
                    }`}
                  />
                  <span className="text-[10px] text-zinc-400 truncate w-full text-center">
                    {bar.stage}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Coral Card: Hot leads */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#FF6B57] to-[#FF856D] text-white rounded-[28px] p-6 shadow-lg shadow-[#FF6B57]/20 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-white/85">Hot leads (BD)</span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/20 backdrop-blur">
                90% commit
              </span>
            </div>

            <div className="my-6">
              <div className="text-4xl font-bold tracking-tight">৳1.12 Cr</div>
              <div className="text-sm font-semibold mt-1">Chaldal Systems — Enterprise</div>
              <p className="text-xs text-white/80 mt-1">
                CTO architecture walkthrough scheduled Thursday 11:00 AM (Banani)
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/20">
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/90">bKash Enterprise</span>
                <span className="font-semibold">৳56L · 80%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-white/90">Pathao Logistics</span>
                <span className="font-semibold">৳33L · 65%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Sales team + Follow-ups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-[28px] p-5 shadow-sm border border-black/[0.03]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold">Sales team quota</h3>
              <span className="text-xs text-zinc-400">Dhaka Team Attainment</span>
            </div>
            <div className="space-y-3.5">
              {[
                { name: 'Sadia Islam', role: 'Enterprise AE', val: '৳21.0L', pct: 92 },
                { name: 'Asif Hossain', role: 'Senior AE', val: '৳18.5L', pct: 84 },
                { name: 'Tahmid Rahman', role: 'Mid-Market AE', val: '৳16.0L', pct: 76 }
              ].map((rep) => (
                <div key={rep.name} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-zinc-800">{rep.name}</span>
                    <span className="text-zinc-500 font-semibold">
                      {rep.val} <span className="text-zinc-400 font-normal">({rep.pct}%)</span>
                    </span>
                  </div>
                  <div className="w-full h-2 bg-[#F6F5F2] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#FF6B57] to-[#FF856D]"
                      style={{ width: `${rep.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-[28px] p-5 shadow-sm border border-black/[0.03] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">Priority follow-ups</h3>
              <button
                onClick={() => setActiveNav('messages')}
                className="text-xs text-[#FF6B57] font-medium hover:underline"
              >
                Open inbox
              </button>
            </div>
            <div className="space-y-2.5">
              {threads.slice(0, 3).map((th) => (
                <div
                  key={th.id}
                  onClick={() => {
                    setActiveThreadId(th.id);
                    setActiveNav('messages');
                  }}
                  className="flex items-center justify-between p-2.5 rounded-2xl bg-[#F6F5F2]/70 hover:bg-[#F6F5F2] cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={th.avatar} alt={th.name} className="w-8 h-8 rounded-full object-cover shrink-0" />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-zinc-900 truncate">{th.name}</div>
                      <div className="text-[11px] text-zinc-500 truncate flex items-center gap-1.5">
                        <span>{th.company} · {th.dealValue}</span>
                        <span className="text-emerald-600 font-medium">{th.phone}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-zinc-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right 4 Columns: Today Schedule + Dark Spotlight Card */}
      <div className="col-span-12 lg:col-span-4 flex flex-col gap-5">
        <div className="bg-white rounded-[28px] p-6 shadow-sm border border-black/[0.03] flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-bold text-zinc-900">Today (Dhaka)</h2>
              <span className="text-xs text-zinc-400">Nov {selectedDay}, 2026</span>
            </div>

            {/* 5-day strip */}
            <div className="grid grid-cols-5 gap-2 my-5">
              {[
                { day: 'Mon', date: 12 },
                { day: 'Tue', date: 13 },
                { day: 'Wed', date: 14 },
                { day: 'Thu', date: 15 },
                { day: 'Fri', date: 16 }
              ].map((d) => (
                <button
                  key={d.date}
                  onClick={() => setSelectedDay(d.date)}
                  className={`py-2.5 rounded-2xl flex flex-col items-center gap-1 transition-all ${
                    selectedDay === d.date
                      ? 'bg-[#FF6B57] text-white shadow-md shadow-[#FF6B57]/25'
                      : 'bg-[#F6F5F2] text-zinc-600 hover:bg-zinc-200/60'
                  }`}
                >
                  <span className="text-[10px] opacity-80">{d.day}</span>
                  <span className="text-xs font-bold">{d.date}</span>
                </button>
              ))}
            </div>

            {/* Timeline events */}
            <div className="space-y-3 mt-2">
              {[
                {
                  time: '10:00 AM',
                  title: 'Pathao Logistics — Proposal Sync',
                  sub: 'Tanvir Ahmed (+880 1712-345678) · ৳33L Deal',
                  accent: true
                },
                {
                  time: '01:30 PM',
                  title: 'Chaldal Systems — Legal Redlines',
                  sub: 'Rafiqul Islam (+880 1912-789012) · ৳1.12 Cr Deal',
                  accent: false
                },
                {
                  time: '04:00 PM',
                  title: 'Q4 Forecast Commit Review',
                  sub: 'Internal Dhaka RevOps · Gulshan Room 3',
                  accent: false
                }
              ].map((ev, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-2xl border ${
                    ev.accent
                      ? 'bg-[#FF6B57]/10 border-[#FF6B57]/20'
                      : 'bg-[#F6F5F2]/60 border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] text-zinc-500">
                    <span className="font-semibold text-[#FF6B57]">{ev.time}</span>
                    <span>30m</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-900 mt-1">{ev.title}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{ev.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Dark Card at bottom right */}
          <div className="mt-6 bg-[#18181B] text-white rounded-3xl p-5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-wider text-zinc-400">
                Deal Spotlight
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#FF6B57] text-white font-semibold">
                ৳56L
              </span>
            </div>
            <div className="text-sm font-bold mt-2">bKash Enterprise — Q4 Annual</div>
            <p className="text-[11px] text-zinc-400 mt-1">
              SOC2 approved. Waiting on final agreement signature from Nusrat Jahan (+880 1819-456789).
            </p>
            <button
              onClick={() => setActiveNav('saved')}
              className="mt-4 w-full py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs font-medium transition-colors"
            >
              Open deal room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
