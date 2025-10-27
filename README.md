# Business Speaker Series | University of Alberta

<div align="center">
  <p>A premier student organization connecting students with industry leaders through inspiring speaker events and professional development opportunities.</p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.io/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  
  **[Live Demo](https://businessspeakerseries.netlify.app/)**
</div>

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Integration](#api-integration)
- [Components](#components)

---

## About

Business Speaker Series is the University of Alberta's premier student organization that connects students with industry leaders through inspiring speaker events and professional development opportunities. This full-stack web application provides a platform for students to discover upcoming events, learn about industry professionals, and engage with the BSS community.

### Mission
The mission of Business Speaker Series is to bridge the gap between academic learning and real-world business experience by creating a platform where University of Alberta students can gain insights from accomplished professionals, develop valuable connections, and explore diverse career paths.

### Key Statistics
- **50+** Industry Speakers
- **12+** Events Per Year  
- **1000+** Students Engaged

---

## Features

- 🎯 **Event Management**: Browse and discover upcoming speaker events
- 👥 **Team Showcase**: View profiles of industry professionals and BSS team members
- 🔐 **Admin Dashboard**: Comprehensive admin panel for content management
- 📱 **Responsive Design**: Fully responsive UI/UX for all devices
- 🔍 **Search & Filter**: Find specific events and team members
- 💾 **Real-time Data**: Live updates from Supabase database
- 🎨 **Modern UI**: Beautiful interface with shadcn/ui components

---

## Technologies Used

### Frontend
- **React 18** - Component-based UI library
- **TypeScript** - Static type checking
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable React components
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icon library

### Backend & Data
- **Supabase** - Backend-as-a-Service (PostgreSQL database, authentication, real-time features)
- **TanStack Query** - Server state management

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Type safety
- **PostCSS** - CSS processing
- **React Hook Form** - Form management
- **Zod** - Schema validation

---

## Requirements

- Node.js (v18 or higher)
- npm, yarn, or bun
- Git

---

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/freelance-webs/bss-website.git
   cd bss-website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Using yarn
   yarn install
   
   # Using bun
   bun install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory with the following:
   ```env
   VITE_SUPABASE_URL=https://tkvnznyysnvpqgctxkep.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRrdm56bnl5c252cHFnY3R4a2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk5ODI0NzMsImV4cCI6MjA3NTU1ODQ3M30.FCccT95VNlqE-v7SJkkJC3prm0sn9LX5l1izzjX1slE
   VITE_SUPABASE_PROJECT_ID=tkvnznyysnvpqgctxkep
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

5. **Open your browser**
   Visit [http://localhost:5173](http://localhost:5173) to see the application

---

## Usage

### Development Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:dev` - Build the application in development mode
- `npm run lint` - Lint and fix code issues
- `npm run preview` - Preview the production build locally

### Admin Features

The application includes an administrative dashboard accessible at `/admin` that allows:
- Event management (create, update, delete)
- Team member management
- Content updates

### Database Integration

The application uses Supabase for backend services:
- PostgreSQL database for data storage
- Authentication capabilities
- Real-time subscriptions
- File storage capabilities

---

## Project Structure

```
bss-website/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   ├── components/ui/      # shadcn/ui components
│   ├── hooks/             # Custom React hooks
│   ├── integrations/      # Third-party service integrations
│   ├── pages/             # Route components
│   ├── assets/            # Images and other assets
│   ├── lib/               # Utility functions
│   └── main.tsx           # Application entry point
├── supabase/              # Supabase configuration
├── .env                   # Environment variables
├── package.json
└── vite.config.ts
```

---

## API Integration

This project integrates with Supabase for backend services:
- **Authentication**: Secure user authentication and authorization
- **Database**: Real-time PostgreSQL database with row-level security
- **Storage**: File upload and management capabilities
- **Real-time**: Live data updates using WebSockets

### Custom Hooks

The application uses custom hooks to manage data fetching:
- `useEvents` - Fetch and manage event data
- `useTeamMembers` - Fetch and manage team member data
- `useUpcomingEvents` - Fetch upcoming events with caching

---

## Components

### UI Components
- **Navigation Menu**: Responsive navigation with mobile support
- **Event Cards**: Attractive cards displaying event information
- **Team Member Cards**: Professional profiles with social links
- **Forms**: Elegant forms with validation
- **Modals & Dialogs**: Interactive overlays for user actions
- **Data Tables**: Organized presentation of tabular data

### Layout Components
- **Admin Layout**: Dedicated admin interface with sidebar
- **Sidebar Navigation**: Organized navigation for admin sections
- **Responsive Grids**: Flexible layouts that adapt to screen size



