# AIMsync Frontend Context & Architecture

## Core Concept
- **Event** is the main container. Every event can have:
  - Speakers (with timeline)
  - Sponsors (with classification, booth info)
  - Logistics (shipments, props, gadgets, etc.)
  - Awards (for speakers or guests)
  - Resources (contacts, both event-specific and global)
  - Checklist/Tasks (assignable, status, comments)

## Data Relationships
- **Event** is the parent for most modules (speakers, sponsors, logistics, awards, resources, checklists).
- **Speakers**: Linked to events, have timeline slots, can receive awards.
- **Sponsors**: Linked to events, have classification and booth details.
- **Logistics**: Linked to events, track items in/out, status, vendor, etc.
- **Awards**: Linked to events, can be given to speakers (by ref) or guests (by info).
- **Resources**: Can be global or event-specific, store contact info for key people.
- **Checklist**: Tasks/todos, can be global or event-specific, assignable to users, with status, comments, subtasks.

## Suggested UI/UX Structure
- **Dashboard**: List of events, quick stats, upcoming tasks/logistics.
- **Event Detail Page**: Tabs or sections for:
  - Overview
  - Speakers (with timeline view)
  - Sponsors
  - Logistics
  - Awards
  - Resources
  - Checklist/Tasks
- **Speaker Timeline**: Visual schedule (Gantt or list) of speaker slots.
- **Checklist Board**: Kanban-style board (Todo, In Progress, Done, etc.)
- **Resource Directory**: Searchable list of contacts, filter by event/global.
- **Role-based UI**: Show/hide admin features based on user role (from JWT).

## API Integration
- Use the `/api/*` endpoints for CRUD and data fetches.
- Use JWT for authentication; store token in localStorage or cookies.
- Use the `message`, `success`, `error`, and `data` fields from API responses for UI feedback.

## User Flows
- **Admin**: Can create/edit/delete all modules, assign tasks, manage users.
- **User**: Can view and update assigned tasks, see event info, interact with checklists.

## Extensibility
- Add new modules as new tabs/sections under events.
- Use enums/constants from backend for dropdowns (roles, status, priorities, etc.)

---
This document is your context for building a modern, modular, and scalable frontend for AIMsync. 