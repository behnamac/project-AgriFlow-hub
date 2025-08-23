import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FileText,
  CheckCircle,
  Edit,
  Flag,
  ArrowLeft,
  Building,
  Calendar,
  User,
  Percent,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DocumentReview = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);

  // Mock document data based on ID
  const [documentData, setDocumentData] = useState({
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
  });

  const handleApprove = () => {
    toast({
      title: "Document Approved",
      description: "The document has been successfully processed and archived.",
    });
    navigate("/inbox");
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      toast({
        title: "Changes Saved",
        description: "Document metadata has been updated successfully.",
      });
    }
  };

  const handleFlag = () => {
    toast({
      title: "Document Flagged",
      description: "This document has been flagged for manual review.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/inbox")}
          className="flex items-center gap-2 w-fit"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Inbox
        </Button>
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Document Review</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">
            Review and validate document metadata
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* PDF Preview Panel */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Document Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg h-64 sm:h-96 flex items-center justify-center">
              <div className="text-center">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 font-medium">{documentData.name}</p>
                <p className="text-sm text-gray-400 mt-2">
                  PDF preview would appear here
                </p>
                <Button className="mt-4" variant="outline">
                  Open Full Document
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Metadata Panel */}
        <Card className="bg-white border border-gray-200">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Edit className="h-5 w-5" />
                Extracted Metadata
              </span>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                AI Processed
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Document Type */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Document Type
                <Badge variant="secondary" className="ml-auto">
                  <Percent className="h-3 w-3 mr-1" />
                  {documentData.confidence.type}%
                </Badge>
              </Label>
              {isEditing ? (
                <Select defaultValue={documentData.type}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Bill of Lading">
                      Bill of Lading
                    </SelectItem>
                    <SelectItem value="Invoice">Invoice</SelectItem>
                    <SelectItem value="Certificate">Certificate</SelectItem>
                    <SelectItem value="Packing List">Packing List</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <Input
                  value={documentData.type}
                  readOnly
                  className="bg-gray-50"
                />
              )}
            </div>

            {/* Shipper */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Building className="h-4 w-4" />
                Shipper
                <Badge variant="secondary" className="ml-auto">
                  <Percent className="h-3 w-3 mr-1" />
                  {documentData.confidence.shipper}%
                </Badge>
              </Label>
              <Input
                value={documentData.shipper}
                readOnly={!isEditing}
                className={isEditing ? "" : "bg-gray-50"}
                onChange={(e) =>
                  setDocumentData({ ...documentData, shipper: e.target.value })
                }
              />
            </div>

            {/* Consignee */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Consignee
                <Badge variant="secondary" className="ml-auto">
                  <Percent className="h-3 w-3 mr-1" />
                  {documentData.confidence.consignee}%
                </Badge>
              </Label>
              <Input
                value={documentData.consignee}
                readOnly={!isEditing}
                className={isEditing ? "" : "bg-gray-50"}
                onChange={(e) =>
                  setDocumentData({
                    ...documentData,
                    consignee: e.target.value,
                  })
                }
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Date
                <Badge variant="secondary" className="ml-auto">
                  <Percent className="h-3 w-3 mr-1" />
                  {documentData.confidence.date}%
                </Badge>
              </Label>
              <Input
                type="date"
                value={documentData.date}
                readOnly={!isEditing}
                className={isEditing ? "" : "bg-gray-50"}
                onChange={(e) =>
                  setDocumentData({ ...documentData, date: e.target.value })
                }
              />
            </div>

            {/* Additional Fields */}
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label>Vessel Name</Label>
                <Input
                  value={documentData.vesselName}
                  readOnly={!isEditing}
                  className={isEditing ? "" : "bg-gray-50"}
                  onChange={(e) =>
                    setDocumentData({
                      ...documentData,
                      vesselName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Port of Loading</Label>
                <Input
                  value={documentData.portOfLoading}
                  readOnly={!isEditing}
                  className={isEditing ? "" : "bg-gray-50"}
                  onChange={(e) =>
                    setDocumentData({
                      ...documentData,
                      portOfLoading: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label>Port of Discharge</Label>
                <Input
                  value={documentData.portOfDischarge}
                  readOnly={!isEditing}
                  className={isEditing ? "" : "bg-gray-50"}
                  onChange={(e) =>
                    setDocumentData({
                      ...documentData,
                      portOfDischarge: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea
                placeholder="Add any additional notes or corrections..."
                className="resize-none"
                rows={3}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button
                onClick={handleApprove}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve
              </Button>
              <Button
                onClick={handleEdit}
                variant={isEditing ? "default" : "outline"}
                className="flex-1"
              >
                <Edit className="h-4 w-4 mr-2" />
                {isEditing ? "Save Changes" : "Edit"}
              </Button>
              <Button
                onClick={handleFlag}
                variant="destructive"
                className="flex-1"
              >
                <Flag className="h-4 w-4 mr-2" />
                Flag
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DocumentReview;
