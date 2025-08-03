# Bug Tracker Backend

Express.js backend with TypeScript and API versioning.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment variables:
   ```bash
   cp .env.example .env
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## API Endpoints

Base URL: `http://localhost:5000/api/v1`

### Health Check
- GET `/health` - Server health status
- GET `/info` - API information

### Bugs
- GET `/bugs` - List all bugs (with pagination)
- GET `/bugs/:id` - Get bug by ID
- POST `/bugs` - Create new bug
- PUT `/bugs/:id` - Update bug
- DELETE `/bugs/:id` - Delete bug

## API Versioning

The API supports versioning through URL paths:
- Current version: `/api/v1/*`
- Future versions: `/api/v2/*` (when available)

You can also specify version via headers:
- `API-Version: v1`
- `Accept-Version: v1`