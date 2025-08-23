import {
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import type { StatData, Document } from "@/types";

export const statsData: StatData[] = [
  {
    title: "Processed Today",
    value: "48",
    icon: CheckCircle,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Pending Review",
    value: "7",
    icon: Clock,
    color: "text-yellow-600",
    bgColor: "bg-yellow-100",
  },
  {
    title: "Auto-Classified",
    value: "41",
    icon: TrendingUp,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Errors",
    value: "3",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
];

export const recentActivity: Document[] = [
  {
    id: 1,
    name: "BOL-4832.pdf",
    type: "Bill of Lading",
    status: "Processed",
    date: "14 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
    tags: ["Maritime", "Q3 Harvest"],
    contact: "Global Shipping Co.",
  },
  {
    id: 2,
    name: "Invoice-7791.pdf",
    type: "Invoice",
    status: "Pending Review",
    date: "14 Jul 2025",
    statusColor: "bg-yellow-100 text-yellow-700",
    tags: ["Q3 Harvest"],
    contact: "GreenHarvest Supply",
  },
  {
    id: 3,
    name: "Organic_Cert.pdf",
    type: "Organic Certificate",
    status: "Processed",
    date: "13 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
    tags: ["Organic", "Certification"],
    contact: "FreshCo Markets",
  },
  {
    id: 4,
    name: "Packing_List_445.pdf",
    type: "Packing List",
    status: "Error",
    date: "13 Jul 2025",
    statusColor: "bg-red-100 text-red-700",
    tags: ["Q3 Harvest"],
    contact: "Express Logistics",
  },
  {
    id: 5,
    name: "Phyto_Cert.pdf",
    type: "Phytosanitary Certificate",
    status: "Processed",
    date: "12 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
    tags: ["Phytosanitary", "Certification"],
    contact: "TradeNet Express",
  },
];
