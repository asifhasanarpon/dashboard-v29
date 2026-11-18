import React from 'react';
import { Plus, Check } from 'lucide-react';

export default function TasksView({
  overdueCount,
  dueTodayCount,
  upcomingCount,
  completedCount,
  taskFilter,
  setTaskFilter,
  filteredTasks,
  toggleTask,
  onOpenNewTaskModal
}) {
  const sections = ['Overdue', 'Today', 'Upcoming', 'Completed'];
  const filterOptions = ['All', 'High priority', 'Deals', 'Follow-ups'];

  return (
    <div className="flex flex-col gap-5 flex-1">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Tasks</h1>
          <p className="text-xs text-zinc-500 mt-0.5">
            Action items tied to active deals & executive follow-ups
          </p>
        </div>
        <button
          onClick={onOpenNewTaskModal}
          className="px-4 py-2 rounded-full bg-[#18181B] text-white text-xs font-medium flex items-center gap-1.5 hover:bg-zinc-800 transition-colors"
        >
          <Plus size={14} />
          <span>New task</span>
        </button>
      </div>

      {/* 4 KPI Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-[#FF6B57] to-[#FF856D] text-white rounded-[24px] p-5 shadow-md shadow-[#FF6B57]/20">
          <div className="text-xs text-white/85">Overdue</div>
          <div className="text-3xl font-bold mt-2">{overdueCount}</div>
          <div className="text-[11px] text-white/80 mt-1">Needs immediate action</div>
        </div>
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]">
          <div className="text-xs text-zinc-400">Due today</div>
          <div className="text-3xl font-bold text-zinc-900 mt-2">{dueTodayCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Across 4 active deals</div>
        </div>
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]">
          <div className="text-xs text-zinc-400">Upcoming</div>
          <div className="text-3xl font-bold text-zinc-900 mt-2">{upcomingCount}</div>
          <div className="text-[11px] text-zinc-400 mt-1">Next 7 days</div>
        </div>
        <div className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]">
          <div className="text-xs text-zinc-400">Completed</div>
          <div className="text-3xl font-bold text-zinc-900 mt-2">{completedCount}</div>
          <div className="text-[11px] text-emerald-600 font-medium mt-1">On track this week</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setTaskFilter(f)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              taskFilter === f
                ? 'bg-[#18181B] text-white'
                : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-black/5'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* 2x2 Task Sections Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {sections.map((section) => {
          const sectionTasks = filteredTasks.filter((t) =>
            section === 'Completed' ? t.completed : !t.completed && t.category === section
          );
          return (
            <div
              key={section}
              className="bg-white rounded-[24px] p-5 shadow-sm border border-black/[0.03]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      section === 'Overdue'
                        ? 'bg-[#FF6B57]'
                        : section === 'Today'
                        ? 'bg-amber-400'
                        : section === 'Completed'
                        ? 'bg-emerald-500'
                        : 'bg-zinc-400'
                    }`}
                  />
                  <h3 className="text-sm font-bold text-zinc-900">{section}</h3>
                </div>
                <span className="text-xs text-zinc-400">{sectionTasks.length}</span>
              </div>

              <div className="space-y-2.5">
                {sectionTasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#F6F5F2]/60 hover:bg-[#F6F5F2] cursor-pointer transition-colors"
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <button
                        className={`mt-0.5 w-4 h-4 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                          task.completed
                            ? 'bg-[#FF6B57] border-[#FF6B57] text-white'
                            : 'border-zinc-300 bg-white'
                        }`}
                      >
                        {task.completed && <Check size={11} />}
                      </button>
                      <div className="min-w-0">
                        <div
                          className={`text-xs font-medium truncate ${
                            task.completed ? 'line-through text-zinc-400' : 'text-zinc-900'
                          }`}
                        >
                          {task.title}
                        </div>
                        <div className="text-[11px] text-zinc-400 mt-0.5">{task.deal}</div>
                      </div>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium shrink-0 ml-2 ${
                        section === 'Overdue'
                          ? 'bg-[#FF6B57]/15 text-[#FF6B57]'
                          : 'bg-white text-zinc-500'
                      }`}
                    >
                      {task.due}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
