
import { Card } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: 'Jan', revenue: 12000, target: 15000 },
  { month: 'Feb', revenue: 15800, target: 18000 },
  { month: 'Mar', revenue: 21000, target: 20000 },
  { month: 'Apr', revenue: 18500, target: 22000 },
  { month: 'May', revenue: 25600, target: 25000 },
  { month: 'Jun', revenue: 28900, target: 28000 },
];

export const RevenueChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Revenue vs Target</h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, '']} />
          <Area type="monotone" dataKey="target" stackId="1" stroke="#94a3b8" fill="#94a3b8" fillOpacity={0.3} />
          <Area type="monotone" dataKey="revenue" stackId="2" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};
