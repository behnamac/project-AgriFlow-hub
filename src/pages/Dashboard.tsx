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
import {
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";

const statsData = [
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

const recentActivity = [
  {
    name: "BOL-4832.pdf",
    type: "Bill of Lading",
    status: "Processed",
    date: "14 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "Invoice-7791.pdf",
    type: "Invoice",
    status: "Pending Review",
    date: "14 Jul 2025",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
  {
    name: "Organic_Cert.pdf",
    type: "Organic Certificate",
    status: "Processed",
    date: "13 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    name: "Packing_List_445.pdf",
    type: "Packing List",
    status: "Error",
    date: "13 Jul 2025",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    name: "Phyto_Cert.pdf",
    type: "Phytosanitary Certificate",
    status: "Processed",
    date: "12 Jul 2025",
    statusColor: "bg-green-100 text-green-700",
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Welcome back, Sarah. Here's your agricultural logistics overview.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        {statsData.map((stat) => (
          <Card
            key={stat.title}
            className="bg-white border border-gray-200 hover:shadow-md transition-shadow"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">
                    {stat.title}
                  </p>
                  <p className="text-xl sm:text-3xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full ${stat.bgColor}`}>
                  <stat.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-white border border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200">
                                  <TableHead className="font-semibold text-gray-700">
                    Document
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700 hidden sm:table-cell">
                    Type
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700">
                    Status
                  </TableHead>
                  <TableHead className="font-semibold text-gray-700 hidden sm:table-cell">
                    Date
                  </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentActivity.map((doc, index) => (
                <TableRow
                  key={index}
                  className="border-gray-100 hover:bg-gray-50"
                >
                  <TableCell className="font-medium text-gray-900">
                    <div className="flex flex-col">
                      <span className="truncate">{doc.name}</span>
                      <span className="text-xs text-gray-500 sm:hidden">{doc.type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-600 hidden sm:table-cell">{doc.type}</TableCell>
                  <TableCell>
                    <Badge className={doc.statusColor}>{doc.status}</Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 hidden sm:table-cell">{doc.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
