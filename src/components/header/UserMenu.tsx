
import { User, LogOut, Layout, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserMenuProps {
  userName: string;
  onLogout: () => void;
}

export const UserMenu = ({ userName, onLogout }: UserMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 text-sm text-gray-200 hover:text-primary transition-colors">
          <User className="w-4 h-4" />
          <span>{userName}</span>
          <ChevronDown className="w-3 h-3" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white" align="end">
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="flex items-center gap-2 text-gray-700">
            <Layout className="w-4 h-4" />
            <span>لوحة التحكم</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/profile" className="flex items-center gap-2 text-gray-700">
            <User className="w-4 h-4" />
            <span>ملفي الشخصي</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={onLogout}
          className="flex items-center gap-2 text-red-600 hover:text-red-700"
        >
          <LogOut className="w-4 h-4" />
          <span>تسجيل الخروج</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
