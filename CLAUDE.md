# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React 19 + TypeScript + Vite application for a dental practice website (Rangel-Chao Dental). It uses React Router for navigation, Tailwind CSS v4 for styling, and Google Maps integration.

## Development Commands

### Running the Application
```bash
npm run dev              # Start development server with HMR
npm run preview          # Preview production build locally
```

### Building
```bash
npm run build            # TypeScript compile + production build
npm run watch-build      # Build in watch mode
```

### Testing
```bash
npm test                 # Run tests with Vitest
npm run test:ui          # Run tests with Vitest UI
npm run test:coverage    # Run tests with coverage report
```

### Linting
```bash
npm run lint             # Run ESLint
```

### Running a Single Test
```bash
npx vitest <test-file-path>                    # Run specific test file
npx vitest <test-file-path> -t "test name"     # Run specific test by name
```

## Architecture

### Application Entry Point
- `src/main.tsx`: Application entry point that wraps the app with `AppContextProvider` and renders `AppRoutes`

### Context/State Management
The application uses React Context for global state management:
- `src/shared/AppContext.tsx`: Defines the React Context
- `src/shared/AppContextProvider.tsx`: Provider component that manages global state
- State includes: `initialized`, `officeHours`, `responsePending`, `modalContent`, and `navState`
- Two update methods available: `updateData()` for general updates, `updateNav()` specifically for navigation state

### Routing Structure
- `src/shared/AppRoutes.tsx`: Defines all application routes using React Router v7
- Uses `createBrowserRouter` with nested routes under a `Layout` component
- All routes render within the `<Outlet />` in `Layout.tsx`
- Route structure:
  - `/` - Home page
  - `/about-us` - About page
  - `/about/drchao`, `/about/drrangel`, `/about/coco` - Individual bio pages
  - `/appointments` - Appointments page

### Layout System
- `src/shared/Layout.tsx`: Root layout component containing `Navigation` and `Footer`
- Handles automatic scrolling to hash targets on route changes
- All page components render inside this layout via React Router's `<Outlet />`

### Directory Structure
- `src/pages/`: Page components organized by route (home, about, appointments, etc.)
- `src/pages/components/`: Shared components used across multiple pages (GoogleMap, splash)
- `src/shared/`: Global layout components (Navigation, Footer, Layout) and app-level logic
- `src/config/`: Application configuration (site info, navigation items)
- `src/@types/`: TypeScript type definitions
- `src/test/`: Test setup and utilities

### Configuration
- `src/config/site.ts`: Centralized site configuration including office address, phone, email, and navigation items
- Exports `officeConfig`, `navigationItems`, and `footerNavigationItems`

### Testing Setup
- Test framework: Vitest with happy-dom environment
- Test utilities: React Testing Library
- Setup file: `src/test/setup.ts` (auto-cleanup after each test)
- Config: `vitest.config.ts` with globals enabled and `@` alias pointing to `./src`

### Testing Guidelines
- **Avoid overly granular text checks**: Don't test for specific text strings or copy in components. Text content frequently changes and these tests become maintenance burdens.
- **Focus on behavior and structure**: Test that components render, user interactions work correctly, and the right components/elements are present.
- **Test user-facing behavior**: Use `getByRole`, `getByTestId`, `getByLabelText` rather than `getByText` for specific copy.
- **Mock child components**: When testing a parent component, mock child components to isolate the component under test.
- **What to test**:
  - Component renders without errors
  - Correct components/elements are present (via test IDs or roles)
  - User interactions trigger expected behavior
  - Props are passed correctly to child components
  - Conditional rendering logic
  - Component structure/order when relevant
- **What NOT to test**:
  - Specific marketing copy or text strings
  - Exact styling classes (unless critical to functionality)
  - Implementation details of child components

### Path Aliases
- `@/` maps to `src/` directory (configured in vitest.config.ts)
