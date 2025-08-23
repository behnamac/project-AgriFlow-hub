import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FileText } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { statsData, recentActivity } from "@/data/dashboardData";

export const DashboardContainer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {t("dashboard.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            {t("dashboard.welcome")}
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {statsData.map((stat) => (
          <Card
            key={stat.title}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                    {t(
                      `dashboard.stats.${stat.title
                        .toLowerCase()
                        .replace(/\s+/g, "")}`
                    )}
                  </p>
                  <p className="text-xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            {t("dashboard.recentActivity")}
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-700">
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("dashboard.documentName")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">
                  {t("dashboard.type")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  {t("dashboard.status")}
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300 hidden sm:table-cell">
                  {t("dashboard.dateReceived")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((doc, index) => (
                <TableRow
                  key={index}
                  className="border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex flex-col">
                      <span className="truncate">{doc.name}</span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">
                        {doc.type}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400 hidden sm:table-cell">
                    {doc.type}
                  </TableCell>
                  <TableCell>
                    <Badge className={doc.statusColor}>{doc.status}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400 hidden sm:table-cell">
                    {doc.date}
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
