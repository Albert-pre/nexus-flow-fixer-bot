
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Mail, Users, FileText } from "lucide-react";

const actions = [
  {
    title: "Add New Prospect",
    description: "Manually add a new prospect to your pipeline",
    icon: Plus,
    color: "bg-blue-500 hover:bg-blue-600"
  },
  {
    title: "Create Campaign",
    description: "Set up a new email marketing campaign",
    icon: Mail,
    color: "bg-green-500 hover:bg-green-600"
  },
  {
    title: "Import Contacts",
    description: "Bulk import prospects from CSV file",
    icon: Users,
    color: "bg-purple-500 hover:bg-purple-600"
  },
  {
    title: "Generate Report",
    description: "Create detailed analytics report",
    icon: FileText,
    color: "bg-orange-500 hover:bg-orange-600"
  }
];

export const QuickActions = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;
          return (
            <Button
              key={action.title}
              variant="outline"
              className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-gray-50"
            >
              <div className={`p-2 rounded-full text-white ${action.color}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-center">
                <p className="font-medium text-sm">{action.title}</p>
                <p className="text-xs text-gray-500 mt-1">{action.description}</p>
              </div>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
