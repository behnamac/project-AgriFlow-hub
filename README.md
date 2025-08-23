# AgriFlow Document Hub

A modern, responsive document management system designed specifically for agricultural logistics companies. Built with React, TypeScript, and modern web technologies.

![AgriFlow Document Hub](https://img.shields.io/badge/AgriFlow-Document%20Hub-green)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-blue)

## 🌾 About AgriFlow

AgriFlow is a specialized agricultural logistics company that handles the transportation and documentation of agricultural products worldwide. Our document management system helps streamline the complex process of managing shipping documents, certifications, and compliance requirements for agricultural exports and imports.

## ✨ Features

### 📄 Document Management

- **Document Inbox**: Process incoming documents with real-time status tracking
- **Document Library**: Archive and organize historical documents with advanced search
- **Document Review**: Interactive document review with approval workflows
- **Multi-format Support**: Handle bills of lading, invoices, packing lists, and specialized agricultural certificates

### 🌍 Internationalization

- **Multi-language Support**: English and Dutch (Nederlands) with easy language switching
- **Localized Content**: All UI elements and content are properly translated
- **RTL Ready**: Built with internationalization best practices

### 🎨 User Experience

- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with shadcn/ui components and DaisyUI
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

### 🔧 Technical Features

- **TypeScript**: Full type safety across the application
- **Modern Architecture**: Separation of concerns with container/presentational pattern
- **State Management**: React Context for global state (theme, language)
- **Performance**: Optimized with Vite and modern React patterns
- **Build System**: Production-ready builds with Vite

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <YOUR_REPOSITORY_URL>
cd interfood-document-hub

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8080` (or the next available port).

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── presentational/    # Pure UI components
│   ├── container/         # Business logic components
│   └── ui/               # Reusable UI components (shadcn/ui)
├── contexts/             # React contexts (AppContext)
├── hooks/                # Custom React hooks
├── pages/                # Page components
├── services/             # Business services (i18n)
├── data/                 # Mock data and constants
├── locales/              # Translation files
│   ├── en/              # English translations
│   └── nl/              # Dutch translations
├── types/                # TypeScript type definitions
├── utils/                # Utility functions
└── constants/            # Application constants
```

For detailed architecture information, see [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md).

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + DaisyUI
- **UI Components**: shadcn/ui
- **State Management**: React Context API
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Internationalization**: Custom i18n service

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full-featured experience with sidebar navigation
- **Tablet**: Adaptive layout with collapsible sidebar
- **Mobile**: Mobile-first design with touch-friendly interactions

## 🌙 Dark Mode

The application supports both light and dark themes:

- Automatic system preference detection
- Manual theme toggle
- Persistent theme selection
- DaisyUI theme integration

## 🌍 Internationalization

Currently supports:

- **English (en)**: Primary language
- **Dutch (nl)**: Secondary language

Adding new languages is straightforward - simply add translation files to the `src/locales/` directory.

## 📄 Document Types Supported

- **Invoices**: Financial documents and billing
- **Certificates**: Organic, fair trade, and quality certifications
- **Bills of Lading**: Shipping and transport documents
- **Packing Lists**: Inventory and packaging documentation
- **Customs Documents**: Import/export compliance
- **Phytosanitary Certificates**: Plant health documentation

## 🔧 Development

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Conventional component structure

### Architecture Patterns

- **Separation of Concerns**: Clear separation between UI and business logic
- **Container/Presentational Pattern**: Reusable components with clear responsibilities
- **Custom Hooks**: Encapsulated logic for reusability
- **Context API**: Global state management

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Options

**Vercel (Recommended)**

```bash
npm install -g vercel
vercel
```

**Netlify**

- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**

- Enable GitHub Pages in repository settings
- Set source to GitHub Actions
- Configure build workflow

**Docker**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "run", "preview"]
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team
- Check the [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for technical details

---

**AgriFlow Document Hub** - Streamlining agricultural logistics documentation since 2024.
