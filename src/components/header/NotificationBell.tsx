
import { useState } from 'react';
import { Bell } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Notification {
  id: string;
  title: string;
  description: string;
  isRead: boolean;
}

export const NotificationBell = () => {
  const [hasNotifications, setHasNotifications] = useState(true);
  const [notifications] = useState<Notification[]>([
    {
      id: '1',
      title: 'تم قبول طلبك',
      description: 'تم قبول طلب تسجيل الشركة بنجاح',
      isRead: false
    },
    {
      id: '2',
      title: 'تحديث حالة الطلب',
      description: 'تم تحديث حالة طلبك إلى قيد المراجعة',
      isRead: false
    }
  ]);

  const handleOpen = () => {
    setHasNotifications(false);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-1 text-sm text-gray-200 hover:text-primary transition-colors relative"
        >
          <Bell className="w-4 h-4" />
          {hasNotifications && (
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-white">
        <div className="py-2 px-4 border-b border-gray-100">
          <h3 className="text-sm font-medium">الإشعارات</h3>
        </div>
        <div className="max-h-[300px] overflow-y-auto">
          {notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="px-4 py-3 focus:bg-gray-50 cursor-default">
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-gray-500">{notification.description}</p>
              </div>
            </DropdownMenuItem>
          ))}
          {notifications.length === 0 && (
            <div className="py-3 px-4 text-sm text-gray-500 text-center">
              لا توجد إشعارات جديدة
            </div>
          )}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
