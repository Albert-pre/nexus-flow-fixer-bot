
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, Edit, Trash2 } from "lucide-react";

interface Prospect {
  id: number;
  name: string;
  email: string;
  company: string;
  phone: string;
  status: 'hot' | 'warm' | 'cold' | 'converted';
  score: number;
  lastContact: string;
}

const mockProspects: Prospect[] = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    company: "TechCorp Inc.",
    phone: "+1 (555) 123-4567",
    status: "hot",
    score: 85,
    lastContact: "2024-01-15"
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@company.com",
    company: "Digital Solutions",
    phone: "+1 (555) 987-6543",
    status: "warm",
    score: 72,
    lastContact: "2024-01-12"
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@startup.io",
    company: "Innovation Labs",
    phone: "+1 (555) 456-7890",
    status: "cold",
    score: 45,
    lastContact: "2024-01-08"
  }
];

interface ProspectTableProps {
  searchTerm: string;
}

export const ProspectTable = ({ searchTerm }: ProspectTableProps) => {
  const filteredProspects = mockProspects.filter(prospect =>
    prospect.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prospect.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prospect.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'destructive';
      case 'warm': return 'default';
      case 'cold': return 'secondary';
      case 'converted': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4 font-medium">Prospect</th>
            <th className="text-left p-4 font-medium">Contact</th>
            <th className="text-left p-4 font-medium">Status</th>
            <th className="text-left p-4 font-medium">Score</th>
            <th className="text-left p-4 font-medium">Last Contact</th>
            <th className="text-left p-4 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProspects.map((prospect) => (
            <tr key={prospect.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-full w-full rounded-full flex items-center justify-center text-white font-medium">
                      {prospect.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </Avatar>
                  <div>
                    <p className="font-medium">{prospect.name}</p>
                    <p className="text-sm text-gray-500">{prospect.company}</p>
                  </div>
                </div>
              </td>
              <td className="p-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    {prospect.email}
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    {prospect.phone}
                  </div>
                </div>
              </td>
              <td className="p-4">
                <Badge variant={getStatusColor(prospect.status) as any}>
                  {prospect.status.toUpperCase()}
                </Badge>
              </td>
              <td className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${prospect.score}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{prospect.score}</span>
                </div>
              </td>
              <td className="p-4 text-sm text-gray-600">
                {prospect.lastContact}
              </td>
              <td className="p-4">
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
