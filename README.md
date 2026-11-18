# Dashboard V29 — Sales & CRM Workspace

This project includes both:
1. **A modular Vite + React + Tailwind CSS project** (`src/`)
2. **A zero-install `standalone-preview.html` file** that you can double-click to open directly in any browser.

## Quick Start (Vite + React)

```bash
npm install
npm run dev
```

## Project Organization

The codebase has been refactored into a clear, modular architecture:

```
src/
├── data/
│   └── mockData.js               # Initial deals, tasks, messages, and mock datasets
├── components/
│   ├── layout/
│   │   ├── Header.jsx            # Top tab navigation pills, search bar, notifications
│   │   └── Sidebar.jsx           # Charcoal pill sidebar with navigation icons & profile
│   ├── modals/
│   │   └── NewTaskModal.jsx      # Dialog to create new CRM tasks linked to active deals
│   └── views/
│       ├── HomeView.jsx          # Overview: Revenue pulse, pipeline chart, hot leads, today timeline
│       ├── SavedView.jsx         # Saved items grid (deals, docs, calls, snippets, audio clips) & collections
│       ├── TasksView.jsx         # KPI summary cards & 2x2 interactive task board (Overdue/Today/Upcoming/Done)
│       └── MessagesView.jsx      # 3-pane CRM inbox (thread list, live chat conversation, deal context)
├── App.jsx                       # Main application orchestrator & state manager
├── main.jsx                      # React entry point
└── index.css                     # Tailwind CSS imports & global rules
```

## Included Views
- **Home (Sales Overview)**: "Close the quarter stronger" hero card, Pipeline by stage vertical bar chart, Coral-orange Hot leads card, Sales team quota attainment, Priority follow-ups, interactive 5-day Today schedule, and Deal Spotlight card.
- **Saved**: Bookmarked deals, PDF playbooks, demo call video cards, audio waveform coaching clips, script snippets, and collection filters.
- **Tasks**: Overdue, Due today, Upcoming, and Completed KPI cards + interactive 2x2 task board.
- **Messages**: 3-pane CRM inbox with conversation threads, live message composer, and linked deal context panel.
