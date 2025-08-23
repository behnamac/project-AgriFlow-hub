import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Inbox, Filter, Download, Eye, Paperclip } from "lucide-react";
import { useNavigate } from "react-router-dom";

const emailData = [
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

const DocumentInbox = () => {
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredEmails = emailData.filter((email) => {
    const matchesStatus =
      statusFilter === "all" ||
      email.status.toLowerCase().includes(statusFilter.toLowerCase());
    const matchesSearch =
      email.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.sender.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const handleViewDocument = (id: number) => {
    navigate(`/review/${id}`);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Document Inbox
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            Manage incoming email documents and attachments
          </p>
        </div>
      </div>

      {/* Filters */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by subject or sender..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:max-w-md"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="processed">Processed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="review">Review Required</SelectItem>
                  <SelectItem value="error">Error</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Table */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Inbox className="h-5 w-5" />
            Email Documents ({filteredEmails.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-700">
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Email Subject
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">
                  Sender
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Attachments
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Status
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Date
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredEmails.map((email) => (
                <TableRow
                  key={email.id}
                  className="border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white max-w-xs truncate">
                    <div className="flex flex-col">
                      <span className="truncate">{email.subject}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">
                        {email.sender}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400 hidden sm:table-cell">
                    {email.sender}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Paperclip className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {email.attachments.length} file
                        {email.attachments.length > 1 ? "s" : ""}
                      </span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">
                      {email.attachments.join(", ")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={email.statusColor}>{email.status}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {email.date}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleViewDocument(email.id)}
                        className="h-8"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentInbox;
