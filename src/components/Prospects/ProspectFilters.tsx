
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter, ChevronDown } from "lucide-react";

export const ProspectFilters = () => {
  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Status
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Statuses</DropdownMenuItem>
          <DropdownMenuItem>Hot</DropdownMenuItem>
          <DropdownMenuItem>Warm</DropdownMenuItem>
          <DropdownMenuItem>Cold</DropdownMenuItem>
          <DropdownMenuItem>Converted</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            Score Range
            <ChevronDown className="h-4 w-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>All Scores</DropdownMenuItem>
          <DropdownMenuItem>80-100</DropdownMenuItem>
          <DropdownMenuItem>60-79</DropdownMenuItem>
          <DropdownMenuItem>40-59</DropdownMenuItem>
          <DropdownMenuItem>0-39</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
