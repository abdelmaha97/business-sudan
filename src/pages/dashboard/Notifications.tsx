
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Bell, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

interface Notification {
  id: string;
  title: string;
  message: string;
  date: string;
  isRead: boolean;
}

export const Notifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "طلب جديد",
      message: "تم استلام طلب تسجيل شركة جديدة",
      date: "2024/03/20",
      isRead: false
    },
    {
      id: "2",
      title: "تحديث حالة الطلب",
      message: "تم تحديث حالة طلب تجديد السجل التجاري",
      date: "2024/03/18",
      isRead: false
    }
  ]);

  const markAsRead = (notificationId: string) => {
    setNotifications(notifications.map(notification => 
      notification.id === notificationId 
        ? { ...notification, isRead: true }
        : notification
    ));
    toast.success("تم تحديث حالة الإشعار");
  };

  const deleteNotification = (notificationId: string) => {
    setNotifications(notifications.filter(notification => notification.id !== notificationId));
    toast.success("تم حذف الإشعار");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">مركز الإشعارات</h1>
      
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card 
            key={notification.id}
            className={notification.isRead ? "opacity-75" : ""}
          >
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{notification.title}</CardTitle>
                  <span className="text-sm text-muted-foreground">{notification.date}</span>
                </div>
                <p className="text-muted-foreground">{notification.message}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-end gap-2">
                {!notification.isRead && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => markAsRead(notification.id)}
                  >
                    <Check className="w-4 h-4 ml-1" />
                    تحديد كمقروء
                  </Button>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <X className="w-4 h-4 ml-1" />
                  حذف
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {notifications.length === 0 && (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              لا توجد إشعارات جديدة
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
