// Theme types
export type Theme = 'light' | 'dark';

// Language types
export type Language = 'en' | 'nl';

// Document types
export type DocumentType = 'Bill of Lading' | 'Invoice' | 'Certificate' | 'Packing List' | 'Customs' | 'Organic Certificate' | 'Phytosanitary Certificate';

// Status types
export type DocumentStatus = 'Processed' | 'Pending Review' | 'Review Required' | 'Error' | 'Approved' | 'Verified' | 'Archived' | 'Cleared';

// Tag types
export type TagType = 'Certification' | 'Operational' | 'Priority' | 'Transport' | 'Compliance';

// Navigation types
export interface NavigationItem {
  title: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}

// Stats data types
export interface StatData {
  title: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
}

// Document types
export interface Document {
  id: number;
  name: string;
  type: DocumentType;
  tags: string[];
  contact: string;
  date: string;
  status: DocumentStatus;
  statusColor: string;
}

// Email document types
export interface EmailDocument {
  id: number;
  subject: string;
  sender: string;
  attachments: string[];
  status: DocumentStatus;
  date: string;
  statusColor: string;
}

// Tag types
export interface Tag {
  id: number;
  name: string;
  usage: number;
  type: TagType;
  description: string;
  color: string;
}

// Document review types
export interface DocumentReviewData {
  name: string;
  type: DocumentType;
  shipper: string;
  consignee: string;
  date: string;
  vesselName: string;
  portOfLoading: string;
  portOfDischarge: string;
  confidence: {
    type: number;
    shipper: number;
    consignee: number;
    date: number;
  };
}

// Translation types
export interface Translation {
  [key: string]: string | Translation;
}

// App context types
export interface AppContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}
