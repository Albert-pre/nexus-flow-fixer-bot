
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RevenueChart } from "./RevenueChart";
import { ConversionFunnel } from "./ConversionFunnel";
import { ReportFilters } from "./ReportFilters";
import { Download, Calendar } from "lucide-react";

export const Reports = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Analytics & Reports</h1>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Date Range
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <ReportFilters />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <ConversionFunnel />
      </div>
    </div>
  );
};
