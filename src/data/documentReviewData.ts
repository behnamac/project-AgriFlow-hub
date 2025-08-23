import type { DocumentReviewData } from "@/types";

export const documentReviewData: DocumentReviewData = {
  name: "BOL-4832.pdf",
  type: "Bill of Lading",
  shipper: "AgriFlow BV",
  consignee: "FreshCo Markets",
  date: "2025-07-13",
  vesselName: "Harvest Star",
  portOfLoading: "Rotterdam",
  portOfDischarge: "Le Havre",
  confidence: {
    type: 95,
    shipper: 92,
    consignee: 88,
    date: 97,
  },
};
