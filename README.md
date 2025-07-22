# AIMsync Backend

A production-grade Node.js + TypeScript backend for an internal event and attendee management platform.

## Tech Stack
- Node.js
- Express
- TypeScript
- MongoDB (Mongoose)
- JWT Authentication

## Folder Structure
```
src/
  models/         # Mongoose models
  controllers/    # Express route handlers
  services/       # Business logic
  routes/         # Express routes
  middlewares/    # JWT, error handling, logging
  utils/          # Utility functions, types, enums
  config/         # DB and environment config
```

## Environment Variables
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - Secret for JWT signing
- `JWT_EXPIRES_IN` - JWT expiration (e.g., '1d')

## Setup
```sh
npm install
npm run dev
```

## API Conventions
All API responses follow this shape:
```json
{
  "success": boolean,
  "data": any,
  "message": string,
  "error": string
}
```

## Modules & Endpoints
- **Event**: `/api/events` - CRUD for events
- **Speaker**: `/api/speakers` - CRUD, timeline, linked to events
- **Sponsor**: `/api/sponsors` - CRUD, linked to events, classification, booth details
- **Logistics**: `/api/logistics` - CRUD, track shipments, props, gadgets, etc.
- **Awards**: `/api/awards` - CRUD, assign to speakers or guests
- **Resources**: `/api/resources` - CRUD, event-specific or global contacts
- **Checklist**: `/api/checklists` - CRUD, assignable tasks, status, comments, etc.
- **User**: `/api/users` - CRUD, role-based access
- **Auth**: `/api/auth` - Sign up, sign in, reset password

## Auth & Roles
- JWT-based authentication
- Roles: ADMIN, USER, etc.
- Role-based access control on all routes

## Development
- Uses `nodemon` for hot-reloading
- Linting and type safety enforced

## Contribution
- Follow code style and naming conventions in the repo
- Add new modules in their own folders

---
For more details, see the code and comments in each module. 