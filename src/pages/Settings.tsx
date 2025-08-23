import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Settings as SettingsIcon,
  Tag,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import { tagsData } from "@/data/settingsData";
import { useTranslation } from "@/hooks/useTranslation";

const Settings = () => {
  const { t } = useTranslation();
  const [newTag, setNewTag] = useState({
    name: "",
    type: "",
    description: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleAddTag = () => {
    if (!newTag.name || !newTag.type) {
      toast({
        title: t("common.error"),
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Tag Added",
      description: `Tag "${newTag.name}" has been added successfully.`,
    });

    setNewTag({ name: "", type: "", description: "" });
    setIsDialogOpen(false);
  };

  const handleDeleteTag = (tagName: string) => {
    toast({
      title: "Tag Deleted",
      description: `Tag "${tagName}" has been removed.`,
      variant: "destructive",
    });
  };

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "certification":
        return "bg-green-100 text-green-700";
      case "operational":
        return "bg-blue-100 text-blue-700";
      case "priority":
        return "bg-red-100 text-red-700";
      case "transport":
        return "bg-cyan-100 text-cyan-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {t("settings.title")}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm sm:text-base">
            {t("settings.description")}
          </p>
        </div>
      </div>

      {/* Tag Management Section */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Tag className="h-5 w-5" />
              Tag Management
            </CardTitle>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add New Tag
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Add New Tag</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="tag-name">Tag Name *</Label>
                    <Input
                      id="tag-name"
                      placeholder="Enter tag name"
                      value={newTag.name}
                      onChange={(e) =>
                        setNewTag({ ...newTag, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tag-type">Type *</Label>
                    <Select
                      value={newTag.type}
                      onValueChange={(value) =>
                        setNewTag({ ...newTag, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select tag type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Certification">
                          Certification
                        </SelectItem>
                        <SelectItem value="Operational">Operational</SelectItem>
                        <SelectItem value="Priority">Priority</SelectItem>
                        <SelectItem value="Transport">Transport</SelectItem>
                        <SelectItem value="Compliance">Compliance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tag-description">Description</Label>
                    <Textarea
                      id="tag-description"
                      placeholder="Enter tag description"
                      value={newTag.description}
                      onChange={(e) =>
                        setNewTag({ ...newTag, description: e.target.value })
                      }
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button onClick={handleAddTag} className="flex-1">
                      Add Tag
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setIsDialogOpen(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-200 dark:border-gray-700">
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Tag Name
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Type
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Usage Count
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Description
                </TableHead>
                <TableHead className="font-semibold text-gray-700 dark:text-gray-300">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tagsData.map((tag) => (
                <TableRow
                  key={tag.id}
                  className="border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <TableCell className="font-medium text-gray-900 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Badge className={tag.color}>{tag.name}</Badge>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getTypeColor(tag.type)}>
                      {tag.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">{tag.usage}</span> documents
                  </TableCell>
                  <TableCell className="text-gray-600 dark:text-gray-400 max-w-xs truncate">
                    {tag.description}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="h-8 hover:bg-red-50 hover:text-red-600"
                        onClick={() => handleDeleteTag(tag.name)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* System Settings */}
      <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <SettingsIcon className="h-5 w-5" />
            System Configuration
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Auto-Classification
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Minimum Confidence Threshold
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    85%
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Auto-approve High Confidence
                  </span>
                  <span className="text-sm text-green-600">Enabled</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Flag Low Confidence
                  </span>
                  <span className="text-sm text-yellow-600">Below 70%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Email Processing
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Check Frequency
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Every 5 minutes
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Attachment Size Limit
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    25 MB
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-sm font-medium dark:text-gray-300">
                    Supported Formats
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    PDF, DOC, DOCX
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <Button>Save Configuration</Button>
            <Button variant="outline">Reset to Defaults</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
