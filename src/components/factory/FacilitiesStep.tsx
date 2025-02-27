
import { Card, CardContent } from "@/components/ui/card";
import { UseFormReturn } from "react-hook-form";
import { Zap, Droplets, Trees, Factory } from "lucide-react";

type FacilitiesStepProps = {
  form: UseFormReturn<any>;
};

export const FacilitiesStep = ({ form }: FacilitiesStepProps) => {
  const facilities = [
    {
      icon: Zap,
      title: "الكهرباء",
      details: ["محطة كهرباء فرعية", "مولدات احتياطية", "شبكة توزيع داخلية"]
    },
    {
      icon: Droplets,
      title: "المياه",
      details: ["شبكة مياه صناعية", "خزانات مياه", "معالجة المياه"]
    },
    {
      icon: Trees,
      title: "البيئة",
      details: ["معالجة النفايات", "تشجير المنطقة", "مراقبة التلوث"]
    },
    {
      icon: Factory,
      title: "المرافق العامة",
      details: ["مواقف سيارات", "مخازن", "مكاتب إدارية"]
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">المرافق والخدمات المتوفرة</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {facilities.map((facility, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <facility.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-lg">{facility.title}</h4>
              </div>
              <ul className="space-y-2">
                {facility.details.map((detail, idx) => (
                  <li key={idx} className="text-gray-600 text-sm">
                    • {detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
