
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ReportFilters = () => {
  return (
    <div className="flex gap-4 flex-wrap">
      <Select defaultValue="30days">
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="7days">Last 7 days</SelectItem>
          <SelectItem value="30days">Last 30 days</SelectItem>
          <SelectItem value="90days">Last 90 days</SelectItem>
          <SelectItem value="1year">Last year</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-40">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Sources</SelectItem>
          <SelectItem value="website">Website</SelectItem>
          <SelectItem value="social">Social Media</SelectItem>
          <SelectItem value="email">Email</SelectItem>
          <SelectItem value="ads">Advertisements</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline">Reset Filters</Button>
    </div>
  );
};
