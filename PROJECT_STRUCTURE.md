# AgriFlow Document Hub - Project Structure

## Overview

This project has been refactored using the **Separation of Concerns** pattern with **Container/Presentational** component architecture, **internationalization (i18n)** support, and **proper directory organization**.

## Directory Structure

```
src/
├── components/
│   ├── presentational/          # Pure UI components (no business logic)
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageToggle.tsx
│   ├── container/               # Container components (business logic + state)
│   │   ├── AppSidebarContainer.tsx
│   │   ├── DashboardContainer.tsx
│   │   └── HeaderContainer.tsx
│   └── ui/                      # Reusable UI components (shadcn/ui)
├── contexts/                    # React contexts
│   └── AppContext.tsx           # Theme and language context
├── hooks/                       # Custom React hooks
│   └── useTranslation.ts        # Translation hook
├── services/                    # Business logic services
│   └── i18n.ts                  # Internationalization service
├── data/                        # Mock data and static content
│   ├── dashboardData.ts
│   ├── documentInboxData.ts
│   ├── documentLibraryData.ts
│   ├── documentReviewData.ts
│   └── settingsData.ts
├── locales/                     # Translation files
│   ├── en/
│   │   └── translations.json
│   └── nl/
│       └── translations.json
├── types/                       # TypeScript type definitions
│   └── index.ts
├── utils/                       # Utility functions
│   └── translation.ts
├── constants/                   # Application constants
│   └── index.ts
└── pages/                       # Page components (legacy - to be refactored)
```

## Architecture Patterns

### 1. Separation of Concerns

- **Presentational Components**: Pure UI components that receive props and render UI
- **Container Components**: Handle business logic, state management, and data fetching
- **Services**: Business logic and external API interactions
- **Hooks**: Reusable stateful logic
- **Contexts**: Global state management

### 2. Container/Presentational Pattern

```typescript
// Presentational Component (Pure UI)
interface ThemeToggleProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

// Container Component (Business Logic)
export const HeaderContainer = () => {
  const { theme, toggleTheme } = useApp();
  return <ThemeToggle theme={theme} onToggle={toggleTheme} />;
};
```

### 3. Internationalization (i18n)

- **Translation Files**: JSON files for each language
- **Translation Service**: Centralized i18n logic
- **Translation Hook**: React hook for easy translation access
- **Language Toggle**: UI component for language switching

## Key Features

### 🌍 Multi-language Support

- **English (en)**: Primary language
- **Dutch (nl)**: Secondary language
- **Automatic Detection**: Browser language detection
- **Persistent Storage**: Language preference saved in localStorage

### 🎨 Theme Management

- **Light/Dark Mode**: Toggle between themes
- **System Preference**: Automatic theme detection
- **Persistent Storage**: Theme preference saved in localStorage
- **DaisyUI Integration**: Seamless theme switching

### 📁 Data Organization

- **Mock Data**: Separated into dedicated files
- **Type Safety**: Full TypeScript support
- **Constants**: Centralized application constants
- **Reusable**: Easy to maintain and update

## Usage Examples

### Using Translations

```typescript
import { useTranslation } from "@/hooks/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation();

  return <h1>{t("dashboard.title")}</h1>;
};
```

### Using App Context

```typescript
import { useApp } from "@/contexts/AppContext";

const MyComponent = () => {
  const { theme, language, toggleTheme, setLanguage } = useApp();

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
};
```

### Creating Presentational Components

```typescript
interface MyComponentProps {
  title: string;
  onAction: () => void;
}

export const MyComponent: React.FC<MyComponentProps> = ({
  title,
  onAction,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={onAction}>Action</button>
    </div>
  );
};
```

### Creating Container Components

```typescript
export const MyContainer: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);

  const handleAction = () => {
    // Business logic here
  };

  return <MyComponent title={t("my.title")} onAction={handleAction} />;
};
```

## Benefits

1. **Maintainability**: Clear separation of concerns
2. **Testability**: Easy to test individual components
3. **Reusability**: Presentational components can be reused
4. **Scalability**: Easy to add new features and languages
5. **Type Safety**: Full TypeScript support
6. **Performance**: Optimized rendering with proper hooks usage

## Next Steps

1. **Refactor Remaining Pages**: Convert remaining page components to container/presentational pattern
2. **Add More Languages**: Support for additional languages
3. **Real API Integration**: Replace mock data with real API calls
4. **Testing**: Add comprehensive unit and integration tests
5. **Documentation**: Add JSDoc comments for all components and functions
