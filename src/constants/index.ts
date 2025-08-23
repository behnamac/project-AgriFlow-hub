import {
  LayoutDashboard,
  Inbox,
  Library,
  Settings,
} from "lucide-react";
import type { NavigationItem } from "@/types";

// Navigation items
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Document Inbox", url: "/inbox", icon: Inbox },
  { title: "Document Library", url: "/library", icon: Library },
  { title: "Settings", url: "/settings", icon: Settings },
];

// Document type icons mapping
export const DOCUMENT_TYPE_ICONS: Record<string, string> = {
  "Invoice": "💰",
  "Certificate": "📜",
  "Bill of Lading": "🚢",
  "Packing List": "📦",
  "Customs": "🏛️",
  "Organic Certificate": "🌱",
  "Phytosanitary Certificate": "🌿",
};

// Status colors mapping
export const STATUS_COLORS: Record<string, string> = {
  "Processed": "bg-green-100 text-green-700",
  "Pending Review": "bg-yellow-100 text-yellow-700",
  "Review Required": "bg-blue-100 text-blue-700",
  "Error": "bg-red-100 text-red-700",
  "Approved": "bg-green-100 text-green-700",
  "Verified": "bg-blue-100 text-blue-700",
  "Archived": "bg-gray-100 text-gray-700",
  "Cleared": "bg-green-100 text-green-700",
};

// Tag type colors mapping
export const TAG_TYPE_COLORS: Record<string, string> = {
  "Certification": "bg-purple-100 text-purple-700",
  "Operational": "bg-blue-100 text-blue-700",
  "Priority": "bg-red-100 text-red-700",
  "Transport": "bg-cyan-100 text-cyan-700",
  "Compliance": "bg-orange-100 text-orange-700",
};

// Supported languages
export const SUPPORTED_LANGUAGES = {
  en: "English",
  nl: "Nederlands",
} as const;

// Default language
export const DEFAULT_LANGUAGE = "en" as const;

// Default theme
export const DEFAULT_THEME = "light" as const;
