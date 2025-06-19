
import { Card } from "@/components/ui/card";

const funnelData = [
  { stage: 'Visitors', count: 10000, percentage: 100 },
  { stage: 'Leads', count: 2500, percentage: 25 },
  { stage: 'Qualified', count: 1000, percentage: 10 },
  { stage: 'Opportunities', count: 400, percentage: 4 },
  { stage: 'Customers', count: 120, percentage: 1.2 }
];

export const ConversionFunnel = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Conversion Funnel</h3>
      <div className="space-y-4">
        {funnelData.map((stage, index) => (
          <div key={stage.stage} className="relative">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{stage.stage}</span>
              <span className="text-sm text-gray-600">{stage.count.toLocaleString()} ({stage.percentage}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-8 relative overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-8 rounded-full transition-all duration-500 flex items-center justify-center text-white text-sm font-medium"
                style={{ width: `${stage.percentage * 4}%`, minWidth: '60px' }}
              >
                {stage.percentage}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
