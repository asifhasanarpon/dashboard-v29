import React, { useState, useMemo } from 'react';
import { INITIAL_SAVED_ITEMS, INITIAL_TASKS, INITIAL_THREADS } from './data/mockData';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import NewTaskModal from './components/modals/NewTaskModal';
import HomeView from './components/views/HomeView';
import SavedView from './components/views/SavedView';
import TasksView from './components/views/TasksView';
import MessagesView from './components/views/MessagesView';

export default function App() {
  // Navigation & global state
  const [activeNav, setActiveNav] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [period, setPeriod] = useState('Q4');
  const [selectedDay, setSelectedDay] = useState(14);

  // Saved items state
  const [savedItems, setSavedItems] = useState(INITIAL_SAVED_ITEMS);
  const [savedTab, setSavedTab] = useState('All');
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [playingAudioId, setPlayingAudioId] = useState(null);

  // Tasks state
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [taskFilter, setTaskFilter] = useState('All');
  const [newTaskModal, setNewTaskModal] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDeal, setNewTaskDeal] = useState('Chaldal Systems · ৳1.12 Cr');

  // Messages state
  const [threads, setThreads] = useState(INITIAL_THREADS);
  const [activeThreadId, setActiveThreadId] = useState('m1');
  const [msgFilter, setMsgFilter] = useState('All');
  const [draftMessage, setDraftMessage] = useState('');

  // Counts & metrics
  const overdueCount = useMemo(
    () => tasks.filter((t) => !t.completed && t.category === 'Overdue').length,
    [tasks]
  );
  const dueTodayCount = useMemo(
    () => tasks.filter((t) => !t.completed && t.category === 'Today').length,
    [tasks]
  );
  const upcomingCount = useMemo(
    () => tasks.filter((t) => !t.completed && t.category === 'Upcoming').length,
    [tasks]
  );
  const completedCount = useMemo(
    () => tasks.filter((t) => t.completed).length,
    [tasks]
  );
  const unreadCount = useMemo(
    () => threads.filter((t) => t.unread).length,
    [threads]
  );

  // Task actions
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              category: !t.completed ? 'Completed' : 'Today'
            }
          : t
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks((prev) => [
      {
        id: 't' + Date.now(),
        title: newTaskTitle.trim(),
        deal: newTaskDeal,
        category: 'Today',
        priority: 'High',
        type: 'Deals',
        due: 'Today, 5:30 PM',
        completed: false
      },
      ...prev
    ]);
    setNewTaskTitle('');
    setNewTaskModal(false);
  };

  // Message actions
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!draftMessage.trim()) return;
    setThreads((prev) =>
      prev.map((th) =>
        th.id === activeThreadId
          ? {
              ...th,
              preview: draftMessage.trim(),
              time: 'Now',
              messages: [
                ...th.messages,
                { id: Date.now(), sender: 'me', time: 'Just now', text: draftMessage.trim() }
              ]
            }
          : th
      )
    );
    setDraftMessage('');
  };

  const activeThread = useMemo(
    () => threads.find((t) => t.id === activeThreadId) || threads[0],
    [threads, activeThreadId]
  );

  // Filtered queries
  const filteredSaved = useMemo(() => {
    return savedItems.filter((item) => {
      const matchesTab = savedTab === 'All' || item.type === savedTab;
      const matchesCollection = !selectedCollection || item.collection === selectedCollection;
      const matchesSearch =
        !searchQuery ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesCollection && matchesSearch;
    });
  }, [savedItems, savedTab, selectedCollection, searchQuery]);

  const filteredTasks = useMemo(() => {
    return tasks.filter((t) => {
      if (taskFilter === 'High priority' && t.priority !== 'High') return false;
      if (taskFilter === 'Deals' && t.type !== 'Deals') return false;
      if (taskFilter === 'Follow-ups' && t.type !== 'Follow-ups') return false;
      if (searchQuery && !t.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    });
  }, [tasks, taskFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-[#F6F5F2] text-[#1A1A1A] flex p-3 md:p-5 gap-5 font-sans">
      {/* Floating Left Sidebar */}
      <Sidebar
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        overdueCount={overdueCount}
        unreadCount={unreadCount}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          overdueCount={overdueCount}
          unreadCount={unreadCount}
        />

        {/* View Routing */}
        {activeNav === 'home' && (
          <HomeView
            period={period}
            setPeriod={setPeriod}
            setActiveNav={setActiveNav}
            threads={threads}
            setActiveThreadId={setActiveThreadId}
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
          />
        )}

        {activeNav === 'saved' && (
          <SavedView
            savedItems={savedItems}
            setSavedItems={setSavedItems}
            savedTab={savedTab}
            setSavedTab={setSavedTab}
            selectedCollection={selectedCollection}
            setSelectedCollection={setSelectedCollection}
            playingAudioId={playingAudioId}
            setPlayingAudioId={setPlayingAudioId}
            filteredSaved={filteredSaved}
          />
        )}

        {activeNav === 'tasks' && (
          <TasksView
            overdueCount={overdueCount}
            dueTodayCount={dueTodayCount}
            upcomingCount={upcomingCount}
            completedCount={completedCount}
            taskFilter={taskFilter}
            setTaskFilter={setTaskFilter}
            filteredTasks={filteredTasks}
            toggleTask={toggleTask}
            onOpenNewTaskModal={() => setNewTaskModal(true)}
          />
        )}

        {activeNav === 'messages' && (
          <MessagesView
            threads={threads}
            setThreads={setThreads}
            activeThread={activeThread}
            activeThreadId={activeThreadId}
            setActiveThreadId={setActiveThreadId}
            msgFilter={msgFilter}
            setMsgFilter={setMsgFilter}
            draftMessage={draftMessage}
            setDraftMessage={setDraftMessage}
            handleSendMessage={handleSendMessage}
          />
        )}
      </div>

      {/* New Task Dialog */}
      <NewTaskModal
        isOpen={newTaskModal}
        onClose={() => setNewTaskModal(false)}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
        newTaskDeal={newTaskDeal}
        setNewTaskDeal={setNewTaskDeal}
        onSubmit={handleAddTask}
      />
    </div>
  );
}
