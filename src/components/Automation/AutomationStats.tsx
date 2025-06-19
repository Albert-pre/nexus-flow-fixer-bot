
import { Card } from "@/components/ui/card";
import { Zap, Mail, Clock, CheckCircle } from "lucide-react";

const stats = [
  {
    title: "Active Automations",
    value: "12",
    icon: Zap,
    color: "text-blue-600"
  },
  {
    title: "Emails Sent Today",
    value: "1,247",
    icon: Mail,
    color: "text-green-600"
  },
  {
    title: "Pending Actions",
    value: "89",
    icon: Clock,
    color: "text-orange-600"
  },
  {
    title: "Completed Today",
    value: "156",
    icon: CheckCircle,
    color: "text-purple-600"
  }
];

export const AutomationStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.title} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full bg-gray-100 ${stat.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
