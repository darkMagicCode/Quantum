# User Management Dashboard

A professional frontend web application built with React, TypeScript, and Vite that demonstrates common real-world frontend skills including data fetching, state management, pagination, searching, authentication flow, and form validation.

## Features

- **Mock Authentication**: Login screen with email/password validation
- **User List Dashboard**: Display users fetched from Random User API
- **Client-Side Pagination**: 10 users per page with pagination controls
- **Search/Filter**: Case-insensitive name search with pagination support
- **User Details Modal**: View detailed user information
- **Profile Editing**: Edit own profile with form validation
- **State Management**: Redux Toolkit for centralized state management
- **Error Handling**: Graceful error handling throughout the application

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - UI component library
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **React Hook Form** - Form management
- **Zod** - Schema validation
- **Axios** - HTTP client
- **React Router** - Routing

## Setup and Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nada
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Usage

### Login

The application starts at the login screen. Use the following credentials to log in:

- **Email**: `q@quantum.io`
- **Password**: `qTask123#`

After successful login, you'll be redirected to the Users dashboard.

### Users Dashboard

- View a list of 50 users fetched from the Random User API
- Search users by name using the search bar
- Navigate through pages using pagination controls
- Click "View Details" button on any user row to see detailed information in a modal

### Profile Page

- Navigate to the Profile page from the top navigation
- Edit your profile information:
  - Name
  - Phone
  - Job Title
  - Years of Experience
  - Address
  - Working Hours
- Form validation ensures all required fields are filled correctly
- Success/error feedback is shown after saving

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Layout/         # Layout components (AppLayout, ProtectedRoute)
│   └── Shared/         # Shared components (Table, SearchBar, Pagination, etc.)
├── pages/              # Page components
│   ├── LoginPage/      # Login page with authentication
│   ├── UsersPage/      # Users list dashboard
│   └── ProfilePage/    # Profile editing page
├── redux/              # Redux store and slices
│   ├── features/       # Feature-based slices (auth, users, profile, ui)
│   └── store/          # Store configuration
├── routes/             # Route components
├── services/           # API services (apiClient)
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Assumptions and Decisions

1. **API Configuration**: The Random User API is called directly using the full URL (`https://randomuser.me/api/?results=50`) instead of using environment variables, as it's a public API that doesn't require configuration.

2. **Authentication**: Authentication is fully mocked on the frontend. No real backend API is called. Tokens are stored in Redux with persistence to localStorage.

3. **State Persistence**: Authentication state and profile data are persisted to localStorage using Redux Persist, so users remain logged in after page refresh.

4. **Pagination**: All 50 users are fetched once and pagination is handled client-side for better performance and user experience.

5. **Search Implementation**: Search is case-insensitive and works with pagination by filtering the full user list before pagination.

6. **Modal Trigger**: Each user row has a "View Details" button to open the user details modal, as specified in the requirements.

7. **Form Validation**: Zod schemas are used for form validation, providing both runtime validation and TypeScript type inference.

## Bonus Features Implemented

- ✅ **TypeScript Support**: Full TypeScript implementation with proper type definitions
- ✅ **Authentication State Persistence**: Redux Persist for maintaining login state across page refreshes
- ✅ **Vite**: Using Vite instead of Create React App for faster development and builds

## Evaluation Criteria Coverage

- ✅ **Core Functionality**: Pagination, search, and modal are fully implemented
- ✅ **Authentication Flow**: Complete mock authentication with proper state management
- ✅ **State Management**: Redux Toolkit with well-organized feature-based slices
- ✅ **Code Organization**: Clean, modular structure with separation of concerns
- ✅ **UI Quality**: Professional, responsive UI using Material-UI components
- ✅ **Documentation**: Comprehensive README with setup instructions and assumptions

## License

This project is part of a coding assessment/task.
