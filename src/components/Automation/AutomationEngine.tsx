
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AutomationList } from "./AutomationList";
import { AutomationStats } from "./AutomationStats";
import { Plus } from "lucide-react";

export const AutomationEngine = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Marketing Automation</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Automation
        </Button>
      </div>

      <AutomationStats />
      <AutomationList />
    </div>
  );
};
