
import { UseFormReturn } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { Factory, Users, AreaChart, DollarSign, Zap, Droplets } from "lucide-react";

type SummaryStepProps = {
  form: UseFormReturn<any>;
};

export const SummaryStep = ({ form }: SummaryStepProps) => {
  const formValues = form.getValues();

  const sections = [
    {
      title: "معلومات المصنع",
      icon: Factory,
      items: [
        { label: "نوع المصنع", value: formValues.factoryType },
        { label: "الطاقة الإنتاجية", value: formValues.productionCapacity },
      ]
    },
    {
      title: "البيانات الفنية",
      icon: AreaChart,
      items: [
        { label: "المساحة", value: `${formValues.area} متر مربع` },
        { label: "قيمة المعدات", value: `${formValues.equipmentValue} ج.س` },
      ]
    },
    {
      title: "القوى العاملة",
      icon: Users,
      items: [
        { label: "عدد العمال", value: formValues.workersCount },
      ]
    },
    {
      title: "المرافق",
      icon: Zap,
      items: [
        { label: "متطلبات الطاقة", value: formValues.powerRequirements },
        { label: "متطلبات المياه", value: formValues.waterRequirements },
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold mb-6">ملخص الطلب</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold">{section.title}</h4>
              </div>
              <div className="space-y-3">
                {section.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span className="text-gray-600">{item.label}</span>
                    <span className="font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-6">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold">الرسوم المطلوبة</h4>
              <p className="text-sm text-gray-500">إجمالي الرسوم المستحقة</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-primary">15,000 ج.س</div>
          <p className="text-sm text-gray-500 mt-1">تشمل رسوم التسجيل والترخيص والخدمات</p>
        </CardContent>
      </Card>
    </div>
  );
};
