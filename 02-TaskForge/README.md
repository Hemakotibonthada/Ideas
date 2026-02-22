# TaskForge ⚡

**Enterprise Project Management & Team Collaboration Platform**

Plan, track, and ship projects with your team using Kanban boards, sprint planning, and real-time collaboration.

## Revenue Model
- **Free**: $0 (5 members, 3 projects)
- **Business**: $12/seat/month (unlimited, sprints, time tracking)
- **Enterprise**: $25/seat/month (SSO, audit logs, API)

## Features
- Kanban boards with drag-and-drop (dnd-kit)
- Sprint planning & management
- Task hierarchy (Epics → Stories → Tasks → Subtasks)
- Priority & label management
- Time tracking with timesheets
- Real-time collaboration via WebSocket
- Comments with markdown & mentions
- File attachments
- Activity feed & audit log
- Notifications system
- Team analytics & velocity charts
- Multiple project views (Board, List, Timeline)
- Custom fields & workflows
- Role-based access control

## Tech Stack
- Next.js 14, React 18, TypeScript, Tailwind CSS
- Prisma ORM + PostgreSQL
- Socket.IO for real-time updates
- @dnd-kit for drag-and-drop
- NextAuth.js

## Getting Started
```bash
cd 02-TaskForge
npm install
cp .env.example .env
npx prisma migrate dev
npm run dev
```

## License
MIT
