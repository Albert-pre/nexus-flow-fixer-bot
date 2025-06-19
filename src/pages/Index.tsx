
import { useState } from "react";
import { Sidebar } from "@/components/Layout/Sidebar";
import { Header } from "@/components/Layout/Header";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { ProspectManager } from "@/components/Prospects/ProspectManager";
import { AutomationEngine } from "@/components/Automation/AutomationEngine";
import { Reports } from "@/components/Reports/Reports";
import { Settings } from "@/components/Settings/Settings";

export type ActiveView = 'dashboard' | 'prospects' | 'automation' | 'reports' | 'settings';

const Index = () => {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderActiveView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'prospects':
        return <ProspectManager />;
      case 'automation':
        return <AutomationEngine />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />
      <div className={`flex-1 transition-all duration-300 ${sidebarCollapsed ? 'ml-16' : 'ml-64'}`}>
        <Header 
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          sidebarCollapsed={sidebarCollapsed}
        />
        <main className="p-6">
          {renderActiveView()}
        </main>
      </div>
    </div>
  );
};

export default Index;
