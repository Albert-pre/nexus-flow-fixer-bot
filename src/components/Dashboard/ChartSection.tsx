
import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const lineData = [
  { month: 'Jan', prospects: 400, conversions: 95 },
  { month: 'Feb', prospects: 520, conversions: 124 },
  { month: 'Mar', prospects: 680, conversions: 162 },
  { month: 'Apr', prospects: 750, conversions: 178 },
  { month: 'May', prospects: 890, conversions: 212 },
  { month: 'Jun', prospects: 1050, conversions: 250 },
];

const barData = [
  { source: 'Website', leads: 450 },
  { source: 'Social Media', leads: 380 },
  { source: 'Email', leads: 290 },
  { source: 'Referrals', leads: 180 },
  { source: 'Ads', leads: 120 },
];

export const ChartSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Prospects & Conversions Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="prospects" stroke="#3b82f6" strokeWidth={2} />
            <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Lead Sources</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="source" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="leads" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};
