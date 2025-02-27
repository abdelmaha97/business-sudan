
import { useState } from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";

export const Requests = () => {
  const [requests, setRequests] = useState([
    {
      id: "1",
      requestNumber: "REQ-2024-001",
      type: "تسجيل شركة جديدة",
      date: "2024/03/20",
      company: "شركة الأمل للتجارة",
      status: "قيد المعالجة"
    },
    {
      id: "2",
      requestNumber: "REQ-2024-002",
      type: "تجديد سجل تجاري",
      date: "2024/03/18",
      company: "شركة النور للصناعات",
      status: "مكتمل"
    },
    {
      id: "3",
      requestNumber: "REQ-2024-003",
      type: "إصدار شهادة",
      date: "2024/03/15",
      company: "مؤسسة الرواد",
      status: "قيد المراجعة"
    }
  ]);

  const handleCancelRequest = (requestId: string) => {
    setRequests(requests.filter(request => request.id !== requestId));
    toast.success("تم إلغاء الطلب بنجاح");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-medium mb-6">طلباتي</h1>
      
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-sm">رقم الطلب</TableHead>
              <TableHead className="text-sm">نوع الطلب</TableHead>
              <TableHead className="text-sm">تاريخ الطلب</TableHead>
              <TableHead className="text-sm">الشركة</TableHead>
              <TableHead className="text-sm">حالة الطلب</TableHead>
              <TableHead className="text-sm">الإجراءات</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="text-sm font-medium">{request.requestNumber}</TableCell>
                <TableCell className="text-sm">{request.type}</TableCell>
                <TableCell className="text-sm">{request.date}</TableCell>
                <TableCell className="text-sm">{request.company}</TableCell>
                <TableCell className="text-sm">
                  <span className={
                    request.status === "مكتمل" 
                      ? "text-green-600" 
                      : "text-yellow-600"
                  }>
                    {request.status}
                  </span>
                </TableCell>
                <TableCell>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleCancelRequest(request.id)}
                    disabled={request.status === "مكتمل"}
                    className="text-sm"
                  >
                    إلغاء الطلب
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
