
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2 } from "lucide-react";

export const Companies = () => {
  const companies = [
    {
      id: 1,
      name: "شركة الأمل للتجارة",
      type: "شركة ذات مسؤولية محدودة",
      registrationNumber: "123456",
      status: "نشط",
    },
    {
      id: 2,
      name: "شركة النور للصناعات",
      type: "مؤسسة فردية",
      registrationNumber: "789012",
      status: "نشط",
    },
    {
      id: 3,
      name: "مؤسسة الرواد",
      type: "مؤسسة فردية",
      registrationNumber: "345678",
      status: "نشط",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-lg font-medium mb-6">شركاتي</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {companies.map((company) => (
          <Card key={company.id}>
            <CardHeader className="flex flex-row items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-1.5">
                <CardTitle className="text-base">{company.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{company.type}</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">رقم السجل:</span>
                  <span className="font-medium">{company.registrationNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">الحالة:</span>
                  <span className="text-green-600 font-medium">{company.status}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
