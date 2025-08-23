import type { EmailDocument } from "@/types";

export const emailData: EmailDocument[] = [
  {
    id: 1,
    subject: "Grain Shipment Documents for July 14",
    sender: "Global Shipping Co.",
    attachments: ["BOL-4832.pdf"],
    status: "Processed",
    date: "14 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    subject: "Re: Missing Organic Certificate",
    sender: "FreshCo Markets",
    attachments: ["Organic_Cert_234.pdf"],
    status: "Pending",
    date: "13 Jul 2025",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 3,
    subject: "Produce Invoice and Packing List - Shipment #7791",
    sender: "GreenHarvest Supply",
    attachments: ["Invoice-7791.pdf", "PackingList-7791.pdf"],
    status: "Review Required",
    date: "13 Jul 2025",
    statusColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 4,
    subject: "Phytosanitary Documentation - Batch 445",
    sender: "Express Logistics",
    attachments: ["Phyto_Cert_445.pdf"],
    status: "Error",
    date: "12 Jul 2025",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    id: 5,
    subject: "Weekly Agricultural Shipment Documents",
    sender: "TradeNet Express",
    attachments: ["BOL-4801.pdf", "Invoice-4801.pdf", "Organic_Cert_4801.pdf"],
    status: "Processed",
    date: "12 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
  },
];
