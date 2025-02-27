
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PanelLeft, Search } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="h-16 bg-[#003979] fixed top-0 right-0 left-0 z-10 border-b border-[#004899]">
        <div className="container mx-auto h-full px-4 flex items-center justify-between">
          <h1 className="text-lg font-medium text-white">لوحة التحكم</h1>
        </div>
      </header>

      {/* Separator Line */}
      <div className="fixed top-16 left-0 right-0 h-[2px] bg-[#1c9ae1] z-10" />

      <div className="flex pt-28">
        {/* Sidebar Toggle Button */}
        <div className={cn(
          "fixed top-24 right-0 transition-all duration-300 ease-in-out p-4",
          isSidebarCollapsed ? "mr-[72px]" : "mr-[280px]"
        )}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className="w-full hover:bg-gray-100"
          >
            <PanelLeft className="h-4 w-4 text-gray-600" />
          </Button>
        </div>
        
        <Sidebar isCollapsed={isSidebarCollapsed} />
        
        {/* Main Content */}
        <div className={cn(
          "flex-1 transition-all duration-300 ease-in-out p-8",
          isSidebarCollapsed ? "mr-[72px]" : "mr-[280px]"
        )}>
          <div className="mb-6">
            <div className="relative w-full max-w-lg">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <Input
                type="search"
                placeholder="ابحث في لوحة التحكم..."
                className="w-full border-gray-200 pr-10 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          <main className="bg-white rounded-lg shadow-sm p-6" dir="rtl">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
