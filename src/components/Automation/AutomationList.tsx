
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Pause, Edit, Trash2 } from "lucide-react";

const automations = [
  {
    id: 1,
    name: "Welcome Email Series",
    description: "5-email sequence for new prospects",
    status: "active",
    triggers: 45,
    completions: 38
  },
  {
    id: 2,
    name: "Demo Follow-up",
    description: "Automated follow-up after demo calls",
    status: "active",
    triggers: 23,
    completions: 19
  },
  {
    id: 3,
    name: "Re-engagement Campaign",
    description: "Win back cold prospects",
    status: "paused",
    triggers: 12,
    completions: 8
  }
];

export const AutomationList = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Your Automations</h3>
      <div className="space-y-4">
        {automations.map((automation) => (
          <div key={automation.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h4 className="font-medium">{automation.name}</h4>
                <Badge variant={automation.status === 'active' ? 'default' : 'secondary'}>
                  {automation.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600 mb-2">{automation.description}</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <span>Triggers: {automation.triggers}</span>
                <span>Completions: {automation.completions}</span>
                <span>Rate: {Math.round((automation.completions / automation.triggers) * 100)}%</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm">
                {automation.status === 'active' ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
