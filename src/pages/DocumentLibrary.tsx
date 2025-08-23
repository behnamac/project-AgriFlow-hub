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
import { Library, Search, Filter, Download, Eye, Building } from "lucide-react";

import { documentsData } from "@/data/documentLibraryData";
import { useTranslation } from "@/hooks/useTranslation";

const DocumentLibrary = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredDocuments = documentsData.filter((doc) => {
    const matchesSearch =
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesType = typeFilter === "all" || doc.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" ||
      doc.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesType && matchesStatus;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Invoice":
        return "💰";
      case "Certificate":
        return "📜";
      case "Bill of Lading":
        return "🚢";
      case "Packing List":
        return "📦";
      case "Customs":
        return "🏛️";
      default:
        return "📄";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {t("documentLibrary.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            {t("documentLibrary.description")}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder={t("common.searchByFilename")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder={t("dashboard.type")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("common.allTypes")}</SelectItem>
                  <SelectItem value="Invoice">{t("documentTypes.invoice")}</SelectItem>
                  <SelectItem value="Certificate">{t("documentTypes.certificate")}</SelectItem>
                  <SelectItem value="Bill of Lading">{t("documentTypes.billOfLading")}</SelectItem>
                  <SelectItem value="Packing List">{t("documentTypes.packingList")}</SelectItem>
                                      <SelectItem value="Customs">{t("documentTypes.customs")}</SelectItem>
                </SelectContent>
              </Select>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder={t("dashboard.status")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("common.allStatus")}</SelectItem>
                  <SelectItem value="approved">{t("documentLibrary.filters.approved")}</SelectItem>
                  <SelectItem value="verified">{t("documentLibrary.filters.verified")}</SelectItem>
                  <SelectItem value="processed">{t("documentLibrary.filters.processed")}</SelectItem>
                  <SelectItem value="archived">{t("documentLibrary.filters.archived")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documents Table */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Library className="h-5 w-5" />
            {t("documentLibrary.documentArchive")} ({filteredDocuments.length} {t("settings.documents")})
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-700">
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("documentLibrary.name")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("dashboard.type")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("documentLibrary.tags")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("documentLibrary.contact")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("documentLibrary.date")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("dashboard.status")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("common.actions")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDocuments.map((doc) => (
                <TableRow
                  key={doc.id}
                  className="border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white max-w-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{getTypeIcon(doc.type)}</span>
                      <span className="truncate">{doc.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {doc.type}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-1">
                      {doc.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-gray-400 dark:text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">
                        {doc.contact}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    {doc.date}
                  </TableCell>
                  <TableCell>
                    <Badge className={doc.statusColor}>{doc.status}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8">
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

export default DocumentLibrary;
