
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Building2,
  FileText,
  Bell,
  HelpCircle,
  File,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed?: boolean;
}

export const Sidebar = ({ isCollapsed = false }: SidebarProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    {
      title: "الرئيسية",
      icon: Home,
      path: "/dashboard",
    },
    {
      title: "الشركات",
      icon: Building2,
      path: "/dashboard/companies",
    },
    {
      title: "الطلبات",
      icon: FileText,
      path: "/dashboard/requests",
    },
    {
      title: "الشهادات",
      icon: File,
      path: "/dashboard/certificates",
    },
    {
      title: "الإشعارات",
      icon: Bell,
      path: "/dashboard/notifications",
    },
    {
      title: "المساعدة",
      icon: HelpCircle,
      path: "/help",
    },
  ];

  return (
    <div 
      className={cn(
        "fixed right-0 top-20 h-[calc(100vh-80px)] bg-white border-l shadow-sm transition-all duration-300 pt-4",
        isCollapsed ? "w-[72px]" : "w-[280px]"
      )}
    >
      <div className="p-3 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              isActive(item.path) 
                ? "bg-primary text-white hover:bg-primary/90" 
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            )}
          >
            <item.icon className={cn(
              "w-5 h-5",
              isActive(item.path) ? "text-white" : "text-gray-400"
            )} />
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.title}</span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
