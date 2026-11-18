import React from 'react';
import { X } from 'lucide-react';

export default function NewTaskModal({
  isOpen,
  onClose,
  newTaskTitle,
  setNewTaskTitle,
  newTaskDeal,
  setNewTaskDeal,
  onSubmit
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-6 w-full max-w-md shadow-xl animate-in fade-in duration-150">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base font-bold">Add new task</h3>
          <button
            onClick={onClose}
            className="text-zinc-400 hover:text-zinc-700 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1">
              Task description
            </label>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="e.g. Send revised pricing deck to CFO"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F5F2] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/30"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-500 mb-1">
              Linked deal
            </label>
            <input
              type="text"
              value={newTaskDeal}
              onChange={(e) => setNewTaskDeal(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F5F2] text-xs focus:outline-none focus:ring-2 focus:ring-[#FF6B57]/30"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs text-zinc-600 hover:bg-zinc-100 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-full text-xs bg-[#FF6B57] text-white font-medium hover:bg-[#e85d49] transition-colors"
            >
              Create task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
