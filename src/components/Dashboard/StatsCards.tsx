
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Mail, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Total Prospects",
    value: "2,847",
    change: "+12.5%",
    trend: "up",
    icon: Users,
    color: "text-blue-600"
  },
  {
    title: "Conversion Rate",
    value: "23.8%",
    change: "+2.1%",
    trend: "up",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "Email Campaigns",
    value: "156",
    change: "+8.3%",
    trend: "up",
    icon: Mail,
    color: "text-purple-600"
  },
  {
    title: "Revenue Generated",
    value: "$45,728",
    change: "+15.2%",
    trend: "up",
    icon: DollarSign,
    color: "text-emerald-600"
  }
];

export const StatsCards = () => {
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
                <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
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
