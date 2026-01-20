# Backend Repository - TaskHub

Backend API for TaskHub, a multi-tenant SaaS task management system with strict separation between a Super Admin system and Organization-level systems.

Built using Node.js, Express, TypeScript, Prisma, and MySQL.

## 🚀 High-Level Overview

- **Multi-tenant architecture** - Single database with tenant isolation via `organizationId`
- **Super Admin vs Organization user separation** - Distinct authentication flows
- **JWT-based authentication** - Secure token-based auth
- **Role-Based Access Control (RBAC)** - Granular permissions
- **Prisma ORM** - Type-safe database access with migrations
- **Background job** - Automated overdue task reminders
- **Separate repositories** - Frontend and Backend are independent

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** ≥ 18.x
- **npm** (comes with Node.js)
- **MySQL** (local installation) OR **Docker + Docker Compose**

## 🗄️ Database Setup (MySQL)

You can run MySQL using either of the following methods:

### ✅ Option 1: Use Local MySQL (No Docker)

If you already have MySQL installed locally:

1. Ensure MySQL is running on `localhost:3306`
2. Create a database:
```sql
CREATE DATABASE saas_app;
```

3. Use this connection string in your `.env`:
```env
DATABASE_URL="mysql://root:password@localhost:3306/saas_app"
```

### 🐳 Option 2: Use MySQL via Docker (Recommended)

If you don't want to install MySQL locally:
```bash
cd backend
docker compose up -d
```

This runs only MySQL in Docker. The backend server is always run manually.

Use this connection string in your `.env`:
```env
DATABASE_URL="mysql://root:password@localhost:3306/saas_app"
```

> **Note:** Docker is used only for MySQL, not for the backend server.

## 🧠 Backend Setup

### 1️⃣ Clone Repository
```bash
git clone https://github.com/Prontent11/Multi-Tenant-SaaS-Backend.git
cd backend
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Environment Configuration

Create a `.env` file in the root directory:
```env
PORT=3000
JWT_SECRET=
DATABASE_URL=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_NAME=
EMAIL_USER=
EMAIL_PASS=
```

### 4️⃣ Prisma Setup (IMPORTANT)

Prisma is used for database schema, migrations, and ORM access.

Run the following commands:
```bash
# Generate Prisma Client
npx prisma generate

# Run database migrations
npx prisma migrate dev
```

Inspect database with Prisma Studio:
```bash
npx prisma studio
```

### 5️⃣ Super Admin Setup (REQUIRED)

The Super Admin is **not** created via API or UI. It is created using a Prisma seed script.

**What is Prisma Seed?**

`prisma db seed` runs a custom script that inserts initial data (like Super Admin) into the configured database.

**Run Seed Script:**
```bash
npm run seed
```

This creates a default Super Admin if it does not already exist.

**Demo Super Admin Credentials:**

- **Email:** admin@platform.com
- **Password:** admin123

**Super Admin Login Endpoint:**
```
POST /api/super-admin/auth/login
```

### 6️⃣ Start Backend Server
```bash
npm run dev
```

Backend runs at:
```
http://localhost:3000
```

## 🔐 Authentication Model

- **JWT-based authentication** - Secure token generation and validation
- **Two login flows:**
  - Super Admin Login
  - Organization Login
- **JWT verified on every request** - Middleware-based authentication
- **Frontend decoding of JWT is for UI only** - Backend is the source of truth

## 👥 Roles & Permissions (Organization Level)

| Role | Permissions |
|------|-------------|
| **ADMIN** | Manage users, create/edit, assign tasks |
| **MANAGER** | Create/edit tasks, assign tasks |
| **USER** | View assigned tasks only, update task status |
| **SUPER_ADMIN** | Manage organizations only (not organization-level access) |

> **Note:** RBAC is enforced at the service layer (defense in depth).

## 🏢 Organization Disablement

When an organization is **DISABLED**:

- All org users lose access immediately
- Login and API access are blocked
- Existing JWTs are rejected by middleware
- Organization data is preserved (not deleted)


## 🔔 Overdue Task Reminder Job  (Uncomment the 

- Background cron job runs **once every 24 hours**
- Identifies overdue tasks (`dueDate < now` and not completed)
- Sends reminder email to assignee
- Email sending is **mocked via console logs** (for demonstration)

## 🔌 API Reference

### 🟣 Super Admin APIs

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/super-admin/auth/login` | Super Admin login |
| POST | `/api/super-admin/organizations` | Create organization |
| GET | `/api/super-admin/organizations` | List organizations |
| PATCH | `/api/super-admin/organizations/:id/status` | Enable/disable organization |
| POST | `/api/super-admin/organizations/:id/admin` | Create organization admin |

### 🔵 Organization Auth APIs

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/org/auth/login` | Org user login |
| PATCH | `/api/org/auth/change-password` | Change own password |

### 🟢 User Management (Org Admin)

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/org/users` | List organization users |
| POST | `/api/org/users` | Create user |
| PATCH | `/api/org/users/:id/reset-password` | Reset user password |

### 🟠 Task Management

| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/api/org/tasks` | List tasks (RBAC-based) |
| POST | `/api/org/tasks` | Create task (Admin/Manager) |
| PATCH | `/api/org/tasks/:id` | Edit task details |
| PATCH | `/api/org/tasks/:id/status` | Update task status |
| DELETE | `/api/org/tasks/:id` | Delete task (Admin only) |

## 🏗️ Backend Structure
```
src/
├── modules/
│   ├── superAdmin/    # Super admin logic
│   ├── orgAuth/       # Organization authentication
│   ├── users/         # User management
│   ├── notification/  # Email and Reminder
│   └── tasks/         # Task management
├── middleware/        # Auth, error handling
├── config/            # Configuration
├── server.ts          # Server file
└── app.ts             # Application entry point
```

## 📌 Key Design Decisions

- **Single database with tenant isolation** - Efficient multi-tenancy
- **Docker used for MySQL** - Simplified local development
- **Prisma for schema and ORM** - Type-safe database operations
- **RBAC enforced server-side** - Security at the service layer
- **Backend is the security authority** - No client-side trust
- **Focus on correctness and clarity** - Clean, maintainable code



## 🔗 Related Repositories

- **Frontend Repository:** [<frontend-repo-url>](https://github.com/Prontent11/TaskHub-Frontend/)
