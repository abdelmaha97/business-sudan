
import { useState } from "react";
import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export const Certificates = () => {
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const companies = [
    {
      id: 1,
      name: "شركة الأمل للتجارة",
      registrationNumber: "123456",
    },
    {
      id: 2,
      name: "شركة النور للصناعات",
      registrationNumber: "789012",
    },
    {
      id: 3,
      name: "مؤسسة الرواد",
      registrationNumber: "345678",
    },
  ];

  const certificates = [
    {
      id: "commercial",
      name: "شهادة السجل التجاري",
      description: "شهادة تثبت تسجيل الشركة في السجل التجاري",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      id: "chamber",
      name: "شهادة الغرفة التجارية",
      description: "شهادة العضوية في الغرفة التجارية",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      id: "tax",
      name: "الشهادة الضريبية",
      description: "شهادة التسجيل الضريبي للشركة",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  const handleDownload = (certificateId: string) => {
    if (!selectedCompany) return;
    console.log(`Downloading ${certificateId} certificate for company ${selectedCompany}`);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">الشهادات</h2>
        <div className="w-full max-w-xl">
          <div className="space-y-2 text-right">
            <label className="block text-sm font-medium text-gray-700">اختر الشركة</label>
            <Select
              value={selectedCompany}
              onValueChange={setSelectedCompany}
            >
              <SelectTrigger className="w-full bg-white text-right border-gray-300 hover:border-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20">
                <SelectValue placeholder="اختر الشركة" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-lg">
                {companies.map((company) => (
                  <SelectItem 
                    key={company.id} 
                    value={String(company.id)}
                    className="text-right hover:bg-gray-100"
                  >
                    {company.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certificates.map((certificate) => (
          <Card key={certificate.id} className="group transition-all duration-200 hover:shadow-md">
            <CardHeader>
              <CardTitle className="text-lg">{certificate.name}</CardTitle>
              <CardDescription>{certificate.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={() => handleDownload(certificate.id)}
                disabled={!selectedCompany}
                className="w-full gap-2 transition-transform group-hover:translate-y-[-2px]"
                variant="outline"
              >
                <Download className={`h-4 w-4 ${certificate.iconColor}`} />
                تحميل الشهادة
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

