
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";

const activities = [
  {
    id: 1,
    user: "John Doe",
    action: "converted to customer",
    time: "2 minutes ago",
    status: "success"
  },
  {
    id: 2,
    user: "Sarah Wilson",
    action: "opened email campaign",
    time: "15 minutes ago",
    status: "info"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "scheduled demo call",
    time: "1 hour ago",
    status: "warning"
  },
  {
    id: 4,
    user: "Emily Brown",
    action: "downloaded whitepaper",
    time: "2 hours ago",
    status: "info"
  },
  {
    id: 5,
    user: "Tom Anderson",
    action: "unsubscribed from emails",
    time: "3 hours ago",
    status: "destructive"
  }
];

export const RecentActivity = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full w-full rounded-full flex items-center justify-center text-white text-sm font-medium">
                {activity.user.split(' ').map(n => n[0]).join('')}
              </div>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{activity.user}</span>{' '}
                {activity.action}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
            <Badge variant={activity.status as any}>
              {activity.status}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};
